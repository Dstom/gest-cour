import logo from '../assets/images/cip-tacna.png'
import Dropdown from './Dropdown'

const Navbar = () => {
    return (
        <div className="bg-gray-100">
            <div className=" 
            max-w-screen-xl flex mx-auto n p-2 items-center gap-2">
                <div>
                    <img width="350 " src="/images/cip-tacna.png" />
                </div>

                <div className="flex space-x-4 mx-auto">
                    <a className="nav-link">
                        Cursos
                    </a>

                    <a className="nav-link">
                        Certificados
                    </a>

                    <Dropdown />

                </div>

                <div className="ml-auto">
                    <a>Username</a>
                </div>
            </div>

            <Dropdown />
        </div>



    )
}

export default Navbar
