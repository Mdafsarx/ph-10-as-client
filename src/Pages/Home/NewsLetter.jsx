const NewsLetter = () => {
    return (
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-10 p-10 bg-[#000000] px-40 text-white">

            <div className="space-y-1">
                <h1 className="text-3xl font-bold">Join Our Newsletter</h1>
                <p className="opacity-75">Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
            </div>

            <div>
                <div className="join">
                    <input className="input join-item  w-72" placeholder="Email" />
                    <button className="btn join-item">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;