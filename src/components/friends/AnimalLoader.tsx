import React from "react"
import ContentLoader from "react-content-loader";

const AnimalLoader: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={379}
        viewBox="0 0 300 379"
        backgroundColor="rgba(255, 255, 255, 0.053)"
        foregroundColor="#fff6f66a"
        {...props}
    >
        <rect x="7" y="0" rx="30" ry="30" width="270" height="251" />
        <rect x="98" y="265" rx="8" ry="8" width="80" height="20" />
        <rect x="63" y="290" rx="17" ry="17" width="156" height="18" />
        <rect x="7" y="314" rx="40" ry="40" width="270" height="68" />
    </ContentLoader>
)

export default AnimalLoader;