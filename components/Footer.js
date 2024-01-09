const Footer = () => {
  return (
  <>
  <footer className="bg-neutral-900 text-center text-white">
    <div className="container px-5 pt-6 mx-auto">
      <div className="flex justify-around">
        <a href="https://github.com/IgorAguiar-Giro/bugStalker" className="cursor-pointer"><ion-icon size="large" name="logo-github"></ion-icon></a>
        <a href="https://react.dev/" className="cursor-pointer"><ion-icon size="large" name="logo-react"></ion-icon></a>
        <a href="https://nodejs.org/en" className="cursor-pointer"><ion-icon size="large" name="logo-nodejs"></ion-icon></a>
      </div>
      <p className="p-5">v1 - Bug Stalker</p> 
    </div>
    <div className="p-4 text-center bg-black bg-opacity-20">
          © 2023 Copyright:
        <a className="text-whitehite" href="https://github.com/IgorAguiar-Giro"> Igor Aguiar</a>
    </div>
  </footer>
  </>
  )
}

export default Footer