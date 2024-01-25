import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/Button";

const IUPCAnnouncement = () => {
    return (
        <div className="w-full text-center py-28 h-screen flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-10">Registration for IUPC is closed!</h1>
            <Link to="/">
                <PrimaryButton text="Go Back" />
            </Link>
        </div>
    );
}

export default IUPCAnnouncement;