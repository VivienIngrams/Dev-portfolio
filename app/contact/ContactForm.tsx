const ContactForm = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4">
      <h1>Lets work together!</h1>
      <form className="max-w-[600px]">
        <div>
          <input className="m-2" type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <input className="w-full m-2" type="text" placeholder="Subject" />
        <textarea className="w-full m-2" cols={30} rows={10} placeholder="Message"></textarea>
        <button className="border shadow-lg m-2">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
