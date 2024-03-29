import Navbar from "components/Navbar";
import Card from "components/Card";
import Footer from "components/Footer";

export default function Page() {
  return (<>
 <Navbar/>
  
  <div className="bg-indigo-600 w-full min-h-screen flex justify-center">
  <div className="container mx-auto px-8 py-4 flex flex-col">
    <Card color="bg-red-400"/>
    <Card color="bg-red-600"/>
    <Card color="bg-red-800"/>
  </div>
  </div>
  <Footer/>


<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>);
}