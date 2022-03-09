function Content (props){
  return(
  	 <div>
	         <h1>{props.title}</h1>
		     <section>{props.children}</section>
	 </div>
	);
}
				 
export default Content;
