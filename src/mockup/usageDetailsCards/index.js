import { preview, extra } from '../../style/assets/images'

const titles = [
    {
        rows: [
            {
                content: [
                    {
                        text: 'ALL-DAY ENERGY',
                        style: [
                            'text-bold',
                            'text-lime',
                            'size-30'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                content: [
                    {
                        text: 'SHARPER FOCUS',
                        style: [
                            'text-bold',
                            'text-lime',
                            'size-30'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                content: [
                    {
                        text: 'MAINTAIN CALMNESS',
                        style: [
                            'text-bold',
                            'text-lime',
                            'size-30'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                content: [
                    {
                        text: 'IMPROVED MEMORY',
                        style: [
                            'text-bold',
                            'text-lime',
                            'size-30'
                        ]
                    }
                ]
            }
        ]
    },
]

const contents = [
    {
        rows: [
            {
                style: [
                    'text-black',
                    'text-regular',
                    'size-20'
                ],
                content: [
                    {
                        text: 'Feel a calm yet dominant energy surge throughout your body. '
                    },
                    {
                        text: 'Green&Lean',
                        style: [
                            'text-bold'
                        ]
                    },
                    {
                        text: ' is not just a quick rise and fall. The ingredients inside this blend assist you in experiencing energy throughout your entire day.',
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                style: [
                    'size-20',
                    'text-black'
                ],
                content: [
                    {
                        text: 'Green&Lean ',
                        style: [
                            'text-bold'
                        ]
                    },
                    {
                        text: 'can boost attention, concentration, and mental clarity. It has an incredible power to give your brain a fresh, alert, and razor-sharp sense of focus all day long.',
                        style: [
                            'text-regular'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                style: [
                    'text-black',
                    'size-20'
                ],
                content: [
                    {
                        text: 'Green&Lean ',
                        style: [
                            'text-bold' 
                        ]
                    },
                    {
                        text: 'contains compounds that help amplify alpha brain waves. Feel locked-in on the task in front of you with inner stillness. ',
                        style: [
                            'text-regular'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                content: [
                    {
                        text: 'Alpha brain waves keep your mind energized yet calm, focused and creative, while heightening memory retention. You get a sustainable, long-lasting surge in natural energy that keeps you engaged, centered, and in the zone.',
                        style: [
                            'text-regular',
                            'text-black',
                            'size-20'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                style: [
                    'text-black',
                    'size-20'
                ],
                content: [
                    {
                        text: 'The ingredients inside ',
                        style: [
                            'text-regular',
                        ]
                    },
                    {
                        text: 'Green&Lean ',
                        style: [
                            'text-bold'
                        ]
                    },
                    {
                        text: 'increase Brain Derived Neurotrophic Factors (BDNF). This nourishes your brain’s neurons, maximizes memory, and accelerates thinking. ',
                        style: [
                            'text-regular'
                        ]
                    }
                ]
            }
        ]
    },
    {
        rows: [
            {
                content: [
                    {
                        text: 'It can encourage the production of neurons in the brain, and protects from embarrassing “mental hiccups” and forgettfullness.',
                        style: [
                            'text-regular',
                            'text-black',
                            'size-20'
                        ]
                    }
                ]
            }
        ]
    },
]

const redContents = [
    {
        style: [
            'text-left'
        ],
        rows: [
            {
                content: [
                    {
                        text: 'Feel younger and more invincible.',
                        style: [
                            'text-bold',
                            'text-red',
                            'size-20',
                            'text-italic',

                        ]
                    }
                ]
            }
        ]
    },
    {
        style: [
            'text-left'
        ],
        rows: [
            {
                content: [
                    {
                        text: "Tackle the to-do's you've been putting off or haven't wanted to do with new determination.",
                        style: [
                            'text-bold',
                            'text-red',
                            'size-20',
                            'text-italic'
                        ]
                    }
                ]
            }
        ]
    },
    {
        style: [
            'text-left'
        ],
        rows: [
            {
                content: [
                    {
                        text: "You're only a sip away from getting into the zone you've been waiting for.",
                        style: [
                            'text-bold',
                            'text-red',
                            'size-20',
                            'text-italic'
                        ]
                    }
                ]
            }
        ]
    },
    {
        style: [
            'text-left'
        ],
        rows: [
            {
                content: [
                    {
                        text: 'Feel whip-smart on a more consistent basis.',
                        style: [
                            'text-bold',
                            'text-red',
                            'size-20',
                            'text-italic'
                        ]
                    }
                ]
            }
        ]
    },
]

export const usageDetailsCards = [
    {
        usageDetailsImgSrc: preview.img1,
        title: titles[0],
        contents: [contents[0]],
        contentRed: redContents[0]
    },
    {
        usageDetailsImgSrc: preview.img2,
        title: titles[1],
        contents: [contents[1]],
        contentRed: redContents[1]
    },
    {
        usageDetailsImgSrc: preview.img3,
        title: titles[2],
        contents: [contents[2], contents[3]],
        contentRed: redContents[2]    
    },
    {
        usageDetailsImgSrc: preview.img4,
        title: titles[3],
        contents: [contents[4], contents[5]],
        contentRed: redContents[3]
    }
]

const moneyBackText = {
    guaranteeOne: {
        rows: [
            {
                content: [
                    {
                        text: '90-Day Money Back Guarantee | All transactions secured and encrypted',
                        fontType: 'text-regular',
                        color: 'text-black',
                        fontSize: 'size-20'
                    }
                ]
            }
        ]
    },
    guaranteeTwo: {
        rows: [
            {
                content: [
                    {
                        text: '90-Day Money Back Guarantee | All transactions secured and encrypted',
                        fontType: 'text-regular',
                        color: 'text-black',
                        fontSize: 'size-20'
                    }
                ]
            },
            {
                content: [
                    {
                        text: 'Cancel your subscription at any time',
                        fontType: 'text-regular',
                        color: 'text-black',
                        fontSize: 'size-20'
                    }
                ]
            },
        ]
    },
}

export const moneyBack = {
    firstGuarantee: {
        text: moneyBackText.guaranteeOne,
        guaranteeImgSrc: extra.moneyGuarantee,
        fontType: 'text-regular',
        color: 'text-black',
        fontSize: 'size-20'
                        
    },
    secondGuarantee: {
        text: moneyBackText.guaranteeTwo,
        guaranteeImgSrc: extra.moneyGuarantee,
        fontType: 'text-regular',
        color: 'text-black',
        fontSize: 'size-20'
                        
    },
}