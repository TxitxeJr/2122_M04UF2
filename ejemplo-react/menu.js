import MenuItem from './MenuItem';

function Menu (){
	return (
<nav>
<ul>
<MenuItem text="TEXTO EJEMPLO" url="/ejemplo" />
<MenuItem text="HomePage" url="/" />
<MenuItem text="Curriculum" url="/cs" />
<MenuItem text="Contacto" url="/contact" />
</ul>
</nav>
	);
}
