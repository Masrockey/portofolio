import Sidebar from "./components/sidebar";

const Contact = () => {
  return (
    
    <div className="grid h-screen grid-cols-12 bg-gray-200 ">
     <div className="flex items-center justify-center col-span-3">
        <Sidebar />
      </div>
      <main className="col-span-9 fade-in">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel velit vitae mi auctor imperdiet sit amet sit amet purus. Praesent euismod, nisl sed venenatis dapibus, risus mi mollis arcu, eu blandit ex elit id magna.</p>
      </main>
    </div>
  );
};

export default Contact;
