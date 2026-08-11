import { useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

//새로고침, 초기 상태의 브라우저가 기억해야될 데이터 값을 로컬저장소에서 가져온다
//또 로컬 저장소에 기억해야될 데이터 값을 저장한다ㅏ.
function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'light' || savedTheme === 'dark'){
      return savedTheme;
    }
  } catch(error) {
    console.log('테마를 불러올 수 없습니다.', error)
  }
  return 'light';
}

//컨텍스트를 적용할 영역을 만드는 것
//리턴에 ThemeContext.Provider 태그로 감싸진 것이 있어야됨
export function ThemeProvider({ children }) {
  //변경 될 테마 값을 담아주는 변수를 설정하자
  const [theme, setTheme] = useState(getInitialTheme);

  //값이 변경되는 기능을 갖는 함수를 정의하자
  //클릭하면 theme의 값을 바꿔주는 기능
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  //useEffect 사용 -> 현재 theme 값을 로컬 저장소에 저장하는 역할
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    //여기서 할당 되는 theme은 
    //위의 useState로 받은 getInitialTheme의 값이다.

    try {
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.log('테마 값을 불러오지 못했습니다.', error)
    }
  }, [theme])
  //useEffect의 의존성 배열 : 이 배열 값이 바뀌면 useEffect 구문을 다시 실행한다.
  //반대로 빈 배열이면 초기에 한번만 실행하고 실행 안함

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
