import './background.css'

const Leafs = () => {
    return (
        <>
            <div className="GreenLeafs">
                {/* Green leafs: */}
                <div style={{
                    "left": "20vw",
                    "animationDuration": "8s",
                    "width": "120px",
                    "height": "120px",
                    "animationName": "leaf_falling",
                    "animationDelay": "3s",
                }} className="GreenLeaf"></div>
                <div style={{
                    "left": "27vw",
                    "animationDuration": "11s",
                    "width": "65px",
                    "height": "65px",
                    "animationName": "leaf_falling",
                    "animationDelay": "5s",
                }} className="GreenLeaf"></div>
                <div style={{
                    "left": "40vw",
                    "animationDuration": "15s",
                    "width": "50px",
                    "height": "50px",
                    "animationName": "leaf_falling_opposite",
                    "animationDelay": "10s",
                }} className="GreenLeaf"></div>
                <div style={{
                    "left": "60vw",
                    "animationDuration": "11s",
                    "width": "60px",
                    "height": "60px",
                    "animationName": "leaf_falling",
                    "animationDelay": "15s",
                }} className="GreenLeaf"></div>
                <div style={{
                    "left": "90vw",
                    "animationDuration": "9s",
                    "width": "90px",
                    "height": "90px",
                    "animationName": "leaf_falling",
                    "animationDelay": "5s",
                }} className="GreenLeaf"></div>
            
            </div>

            <div className="OrangeLeafs">
                {/* Orange leafs: */}
                <div style={{
                    "left": "10vw",
                    "animationDuration": "10s",
                    "width": "80px",
                    "height": "80px",
                    "animationName": "leaf_falling",
                    "animationDelay": "4s",
                }} className="OrangeLeaf"></div>
                <div style={{
                    "left": "50vw",
                    "animationDuration": "8s",
                    "width": "70px",
                    "height": "70px",
                    "animationName": "leaf_falling_opposite",
                    "animationDelay": "30s",
                }} className="OrangeLeaf"></div>
                <div style={{
                    "left": "63vw",
                    "animationDuration": "17s",
                    "width": "60px",
                    "height": "60px",
                    "animationName": "leaf_falling_opposite",
                    "animationDelay": "4s",
                }} className="OrangeLeaf"></div>
                <div style={{
                    "left": "77vw",
                    "animationDuration": "14s",
                    "width": "90px",
                    "height": "90px",
                    "animationName": "leaf_falling_opposite",
                    "animationDelay": "18s",
                }} className="OrangeLeaf"></div>
            </div>
        </>
    )
}

export default Leafs