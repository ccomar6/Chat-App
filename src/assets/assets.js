// Importing assets with absolute paths for testing
import avatar_icon from '/src/assets/avatar_icon.png';
import gallery_icon from '/src/assets/gallery_icon.png';
import help_icon from '/src/assets/help_icon.png';
import logo_icon from '/src/assets/logo_icon.png';
import logo_big from '/src/assets/logo_big.png';
import logo from '/src/assets/logo.png';
import pic1 from '/src/assets/pic1.png';
import pic2 from '/src/assets/pic2.png';
import pic4 from '/src/assets/pic4.png';
import profile_img from '/src/assets/profile_richard.png';
import search_icon from '/src/assets/search_icon.png';
import send_button from '/src/assets/send_button.png';
import add_icon from '/src/assets/add_icon.png';
import menu_icon from '/src/assets/menu_icon.png';
import arrow_icon from '/src/assets/arrow_icon.png';
import green_dot from '/src/assets/green_dot.png';

// Trying a different file name for pic3
import pic3 from '/src/assets/picture_three.png'; // Rename your pic3.png to picture_three.png

// Log URL to check what Vite thinks the path is
console.log(new URL('./picture_three.png', import.meta.url).href);

const assets = {
    avatar_icon,
    gallery_icon,
    help_icon,
    logo_big,
    logo_icon,
    logo,
    pic1,
    pic2,
    pic3,
    pic4,
    profile_img,
    search_icon,
    send_button,
    add_icon,
    menu_icon,
    arrow_icon,
    green_dot
};

export default assets;