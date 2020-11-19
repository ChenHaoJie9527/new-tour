const isCurrentNameInNick = {
    bannerNickName: "baners"
}
export const useBannerImage = (name, undefinValue = null) => {
    if (name === isCurrentNameInNick.bannerNickName) {
        return currentImages();
    } else {
        return undefinValue;
    }
}

function currentImages() {
    // const Img_URL = "../assets/image/banners";
    return {
        1: require(`../assets/image/banners/bh.jpg`),
        2: require(`../assets/image/banners/ht.jpg`),
        3: require(`../assets/image/banners/jn.jpg`),
        4: require(`../assets/image/banners/zzt.jpg`),
        5: require(`../assets/image/banners/xm.jpg`),
    };
}
