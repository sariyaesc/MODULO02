export default function Home() {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/styles/global.css" />
            </head>
            <div className="gradient-bg">
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
                <div className="interactive"></div>
            </div>
            <h1>Hola</h1>
        </>
    );
}
