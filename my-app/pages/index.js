import toast,{Toaster} from "react-hot-toast"
import Button from "@/components/common/Button"

export default function Home() {
  //AQUI VA LA LOGICA EN JS
  const handleClick=() =>toast.success("Hola mundo")

  return (
    //AQUI VA EL HTML
    <>
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">

      <Toaster position="top-center"></Toaster>
      <h1 className="text-2xl bg-white text-black">Hola mundo :D</h1>
      <p>Esto es un test</p>
      <p>Hola</p>
      <button onClick={handleClick}>Click</button>
      <Button noty="ALERTAAAA">HOLAAA</Button>

    </div>
    </>
    
    
  );
}
