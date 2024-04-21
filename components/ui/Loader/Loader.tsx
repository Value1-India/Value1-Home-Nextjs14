interface LoaderProps {
    width: string,
    textSize: string
}

const Loader: React.FC<LoaderProps> = ({ width,textSize }) => {
    return (
        <div
            className={`loader border-t-2 rounded-full border-yellow-500 bg-white animate-spin aspect-square w-${width} text-${textSize} flex justify-center items-center text-gold-500`}
            style={{ width: width }}
        >
            ₹
        </div>
    );
};

export default Loader;