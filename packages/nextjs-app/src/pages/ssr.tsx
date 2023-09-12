export default function Page({ data }) {
   return <>
   <div>This page was generated at {data}</div>
   </>;
  }
   
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const data =new Date().toISOString();
    console.log("HELLO FROM SSR PAGE at", data);
    // Pass data to the page via props
    return { props: { data } }
  }