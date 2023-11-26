import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-stone-950 text-white ">
            <aside>
                <img className="w-44" src="https://i.ibb.co/55F6yKW/images.png" alt="" />
                <p>JCX Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Popular Search</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Quick Links</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Discover</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <div>
                <header className="footer-title">Social contact</header>
                <div className="grid grid-flow-col gap-4">
                    <a><FaTwitter className="text-3xl text-sky-500"></FaTwitter></a>
                    <a><FaYoutube className="text-3xl text-red-600"></FaYoutube></a>
                    <a><FaFacebook className="text-3xl text-sky-500"></FaFacebook></a>
                </div>
            </div>
            

        </footer>
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by JCX Industries Ltd.</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;