import Header from "../Components/Header"
import Navbar from "../Components/Nav";
import ContentHeader from "../Components/ContentHeader";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
     <div>
     <Header/>
<Navbar/>
<ContentHeader/>

     
     </div>
    </main>
  );
}
