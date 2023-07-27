/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavItem = ({ link }) => {
    const linkVariants = {
        hover: {
            scale: 1.1,
            color: 'rgb(255, 215, 0)',
            transition: {
                duration: 0.3,
            }
        },
        tap: {
            scale: 0.90,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <motion.div
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            className="text-blue-1 text-lg shadow-xl cursor-pointer"
        >
            <Link to={link.path} className="block">
                {link.title}
            </Link>
        </motion.div>
    );
}

export default NavItem;