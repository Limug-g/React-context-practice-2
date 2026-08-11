import { createContext, useContext } from "react";

export const ThemeContext = createContext(null)

//빈 그릇을 만드는 과정
//prop 으로 값을 전달 전달하는 것이 아니라 이 빈 그릇을 import하기만 하면 
//그 안에 있는 값을 꺼내서 쓸 수 있음 

export function useTheme(){
  const context = useContext(ThemeContext);
  if(context === null){
    throw new Error('useTheme은 ThemeProvider 안에서 사용해야됩니다.')
  }
  return context;
}
//위의 커스텀 훅은 useTheme이라는 기능 : 데이터 값이 null이면 에러를 표시한다.
//이 훅이 갖고 있는 기능을 여러 jsx 파일에서 쓰기 위해 따로 만들어 놓은 것
//그럼 다른 jsx파일에서는 저 if문을 쓸 필요 없고 
//import {useTheme} from ''하고 'const 변수 = useTheme();' 이거만 쓰면된