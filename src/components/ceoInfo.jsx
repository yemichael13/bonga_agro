import React from "react";
import TiltedCard from "../assets/TiltedCard";

export default function CEOInfo() {
    return (
        <section className="ceo-info-section px-4 py-12 bg-gray-100 flex flex-col items-center">

        <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Getachew Kebede - CEO of Yebonga Agro"
        captionText="Getachew Kebede - CEO of Yebonga Agro"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
            <p className="tilted-card-demo-text bg-bg-white/20 backdrop-blur-sm m-5">
            Getachew Kebede, CEO
            </p>
        }
        />
        <div className="mt-8 text-center max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Message from the CEO</h2>
            <p className="text-gray-700">
            At Yebonga Agro, our mission is to revolutionize agriculture through innovation and sustainability. We are committed to empowering farmers with cutting-edge technology and practices that enhance productivity while preserving the environment. Together, we can cultivate a brighter future for agriculture.
            </p>
        </div>
        </section>
    )
}
