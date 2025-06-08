import { useAppContext } from "../contexts/Context";

export default function Backdrop() {
    const { backdrop } = useAppContext();
    
    return (
        <div className="backdrop" ref={ backdrop }></div>
    );
}