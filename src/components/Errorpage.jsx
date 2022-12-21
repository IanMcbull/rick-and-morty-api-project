import errorPageImage from "../assets/images/Error 404 Illustrations 2.0/SVG/5.svg"
function Errorpage({errorMsg}) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center max-h-screen">
        <img src={errorPageImage} alt="error page illustration" className="max-w-[800px]"/>
         <p className="text-4xl error-page-text">{errorMsg}</p> 
    </div>
  )
}

export default Errorpage