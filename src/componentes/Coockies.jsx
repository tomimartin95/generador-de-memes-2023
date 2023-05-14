import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const Coockies = () => {
    const MySwal = withReactContent(Swal);

    Swal.fire('Bienvenido, acepta las cookies');
}

export default Coockies;