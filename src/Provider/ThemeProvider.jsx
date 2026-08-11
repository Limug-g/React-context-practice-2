import { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



//컨텍스트를 적용할 영역을 만드는 것
//리턴에 ThemeContext.Provider 태그로 감싸진 것이 있어야됨
export function ThemeProvider({ children }) {
  //변경 될 테마 값을 담아주는 변수를 설정하자
  const [theme, setTheme] = useState('light');

  //값이 변경되는 기능을 갖는 함수를 정의하자
  //클릭하면 theme의 값을 바꿔주는 기능
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
