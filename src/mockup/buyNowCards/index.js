import { products } from "../../style/assets/images"

const buyNowCardsText = {
    cardOne: {
        title: {
            rows: [
                {
                    content: [
                        {
                            text: "One Time Purchase",
                            style: [
                                "text-bold",
                                "text-black",
                                "size-30"
                            ]
                        }
                    ]
                }
            ]
        },
        subTitle: {
            rows: [
                {
                    content: [
                        {
                            text: "3 Pouches",
                            style: [
                                "text-regular",
                                "text-black",
                                "size-24"
                            ]
                        }
                    ]
                }
            ]
        },
        priceSection: {
            rows: [
                {
                    content: [
                        {
                            text: "Save 37.50%",
                            style: [
                                "text-light",
                                "text-black",
                                "size-20"
                            ]
                        }
                    ]
                },
                {
                    content: [
                        {
                            text: "$149.95",
                            style: [
                                "text-bold",
                                "text-lime",
                                "size-50"
                            ]
                        }
                    ]
                }
            ]
        },
        buyNowButton: {
            rows: [
                {
                    style: [
                        'text-black'
                    ],
                    content: [
                        {
                            text: "BUY NOW",
                            style: [
                                "text-bold",
                                "size-24"
                            ]
                        }
                    ]
                },
                {
                    content: [
                        {
                            text: "$5 Ground shipping",
                            style: [
                                "text-regular",
                                "size-18"
                            ]
                        }
                    ]
                }
            ]
        },
        regularPrice: {
            rows: [
                {
                    content: [
                        {
                            text: "Regular Price: ",
                            style: [
                                "text-regular",
                                "text-black",
                                "size-18"
                            ]
                        }
                    ]
                }
            ]
        },
    },
    cardTwo: {
        title: {
            rows: [
                {
                    content: [
                        {
                            text: "Subscribe & Save",
                            style: [
                                "text-bold",
                                "text-white",
                                "size-30"
                            ]
                        }
                    ]
                }
            ]
        },
        subTitle: {
            rows: [
                {
                    content: [
                        {
                            text: "Buy 4 ",
                            style: [
                                "text-bold",
                                "text-black",
                                "size-24"
                            ]
                        },
                        {
                            text: "Get 1 FREE",
                            style: [
                                "text-bold",
                                "text-red",
                                "size-24"
                            ]
                        }
                    ]
                }
            ]
        },
        priceSection: {
            rows: [
                {
                    content: [
                        {
                            text: "Save 50%",
                            style: [
                                "text-light",
                                "text-black",
                                "size-20"
                            ]
                        }
                    ]
                },
                {
                    content: [
                        {
                            text: "$199.95",
                            style: [
                                "text-bold",
                                "text-lime",
                                "size-50"
                            ]
                        }
                    ]
                }
            ]
        },
        buyNowButton: {
            rows: [
                {
                    content: [
                        {
                            text: "Buy Now",
                            style: [
                                "text-bold",
                                "text-black",
                                "size-24"
                            ]
                        }
                    ]
                },
                {
                    content: [
                        {
                            text: "FREE shipping",
                            style: [
                                "text-regular",
                                "text-black",
                                "size-18"
                            ]
                        }
                    ]
                }
            ]
        },
        regularPrice: {
            rows: [
                {
                    content: [
                        {
                            text: "Regular Price: ",
                            style: [
                                "text-regular",
                                "text-black",
                                "size-18"
                            ]
                        }
                    ]
                }
            ]
        },
    }
}

export const buyNowCards = {
    beigeCard: {
        text: buyNowCardsText.cardOne,
        headerColor: "bg-beige",
        productsImgSrc: products.treeProducts,
        backgroundColor: "bg-white"
    },
    greenCard: {
        text: buyNowCardsText.cardTwo,
        headerColor: "bg-lime",
        productsImgSrc: products.fiveProducts,
        backgroundColor: "bg-lime-light"
    },
}

