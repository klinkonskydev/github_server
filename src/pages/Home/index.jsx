import { Header } from "../header";
import { Main } from "../main";

export function Home(){
  console.log('%c Maked by klinkonskydev', 'font: 400 20px/100px Arial, sans-serif; color: #0bf;');
  return (
    <>
      <Header />
      <Main />
    </>
  )
}