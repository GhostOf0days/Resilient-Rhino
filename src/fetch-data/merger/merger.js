const fs = require('fs');
const path = require('path');

// Main array
const main = [ 
    {
        "Argentina": [
            {
                "name": "Helpline Argentina",
                "url": "http://www.casbuenosaires.com.ar/",
                "url_info": "",
                "phone": ["135"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Australia": [
            {
                "name": "Lifeline Australia",
                "url": "https://www.lifeline.org.au/",
                "url_info": "",
                "phone": ["13 11 14"],
                "phone_info": ""
            },
            {
                "name": "Beyond Blue",
                "url": "https://www.beyondblue.org.au/",
                "url_info": "",
                "phone": ["1300 22 4636"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Austria": [
            {
                "name": "Rat auf Draht",
                "url": "http://www.rataufdraht.at/",
                "url_info": "",
                "phone": ["147"],
                "phone_info": ""
            },
            {
                "name": "Telefonseelsorge",
                "url": "https://www.telefonseelsorge.at/",
                "url_info": "",
                "phone": ["142"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Belgium": [
            {
                "name": "Zelfmoordlijn1813",
                "url": "https://www.zelfmoord1813.be/",
                "url_info": "",
                "phone": ["1813"],
                "phone_info": ""
            },
            {
                "name": "Tele-Onthaal",
                "url": "http://www.tele-onthaal.be/",
                "url_info": "",
                "phone": ["106"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Brazil": [
            {
                "name": "CVV",
                "url": "https://www.cvv.org.br/",
                "url_info": "",
                "phone": ["188"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Bulgaria": [
            {
                "name": "Bulgarian Association for Prevention and Help in Crisis Situations",
                "url": "http://www.bgprevencia.org/",
                "url_info": "",
                "phone": ["00359 888 888 888"],
                "phone_info": ""
            },
            {
                "name": "Bulgarian Helpline for Children and Adolescents",
                "url": "http://www.childhelpline.bg/",
                "url_info": "",
                "phone": ["00359 894 444 444"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Canada": [
            {
                "name": "Crisis Services Canada",
                "url": "https://www.crisisservicescanada.ca/",
                "url_info": "",
                "phone": ["1-833-456-4566"],
                "phone_info": ""
            },
            {
                "name": "Kids Help Phone",
                "url": "https://www.kidshelpphone.ca/",
                "url_info": "",
                "phone": ["1-800-668-6868"],
                "phone_info": ""
            },
            {
                "name": "The Lifeline Canada Foundation",
                "url": "https://thelifelinecanada.ca/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "CMHA Kelowna",
                "url": "https://www.cmhakelowna.com/",
                "url_info": "",
                "phone": ["250-861-3644"],
                "phone_info": ""
            },
            {
                "name": "Canadian Association for Suicide Prevention (CASP)",
                "url": "https://www.suicideprevention.ca/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "eMentalHealth.ca",
                "url": "https://www.ementalhealth.ca/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "Crisis Text Line - Canada",
                "url": "https://thelifelinecanada.ca/get-help/chat/",
                "url_info": "",
                "phone": ["686868"],
                "phone_info": "Text CONNECT"
            },
            {
                "name": "Youthspace.ca",
                "url": "https://www.youthspace.ca/",
                "url_info": "Online chat support for youth",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "HopeLine Lawyer",
                "url": "https://www.hopelinelawyer.ca/",
                "url_info": "",
                "phone": ["1-866-577-2525"],
                "phone_info": "Legal advice for youth"
            },
            {
                "name": "Find a Crisis Centre - CASP",
                "url": "https://suicideprevention.ca/thinking-about-suicide/find-a-crisis-centre/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "China": [
            {
                "name": "Beijing Suicide Research and Prevention Center",
                "url": "http://www.crisis.org.cn/",
                "url_info": "",
                "phone": ["800-810-1117", "010-8295-1332"],
                "phone_info": ""
            },
            {
                "name": "Lifeline China",
                "url": "https://lifelinechina.org/",
                "url_info": "",
                "phone": ["400 821 1215"],
                "phone_info": ""
            },
            {
                "name": "Lifeline Shanghai",
                "url": "http://www.lifeline-shanghai.com/",
                "url_info": "",
                "phone": ["021 6279 8990"],
                "phone_info": ""
            },
            {
                "name": "24小时免费心理援助热线电话",
                "url": "",
                "url_info": "",
                "phone": ["020-81899120"],
                "phone_info": "Free 24 Hour Helpline"
            },
            {
                "name": "沈阳市心理援助24小时热线",
                "url": "http://www.symhn.cn/",
                "url_info": "",
                "phone": ["024-23813000"],
                "phone_info": "Shenyang Psychological Assistance 24-Hour Hotline"
            },
            {
                "name": "抚州市心理援助热线",
                "url": "http://wjw.jxfz.gov.cn/",
                "url_info": "",
                "phone": ["17379487044"],
                "phone_info": "Fuzhou Psychological Assistance Hotline"
            },
            {
                "name": "昆明市24小时心理热线",
                "url": "https://www.ynjs.com.cn/gyzx/",
                "url_info": "",
                "phone": ["0871-65011111"],
                "phone_info": "Kunming 24-Hour Psychological Hotline"
            },
            {
                "name": "宝鸡市心理咨询",
                "url": "http://www.bjskfyy.com/",
                "url_info": "",
                "phone": ["09173203366"],
                "phone_info": "Psychological Counseling in Baoji City"
            },
            {
                "name": "焦作市24小时心理援助热线",
                "url": "http://www.jzsjsby.com/",
                "url_info": "",
                "phone": ["0391-3698120"],
                "phone_info": "Jiaozuo 24-hour psychological assistance hotline"
            },
            {
                "name": "“新型冠状病毒感染的肺炎”疫情防控心理援助热线",
                "url": "http://www.kfwuyuan.com/",
                "url_info": "Mental Hospital of Kaifeng",
                "phone": ["400-1096096"],
                "phone_info": "“Coronavirus” Prevention and Control Psychological Assistance Hotline"
            },
            {
                "name": "许昌市“新冠肺炎”24小时心理援助热线",
                "url": "http://www.xcsjayy.com/",
                "url_info": "Xuchang Jianan Hospital",
                "phone": ["0374-3361021"],
                "phone_info": "Xuchang “Coronavirus” 24-Hour Psychological Assistance Hotline"
            },
            {
                "name": "全国咨询热线",
                "url": "http://www.hbsapc.cn/",
                "url_info": "Hebei Psychological Consultant Association",
                "phone": ["13722875022"],
                "phone_info": "National Hotline"
            },
            {
                "name": "天津天空心理咨询热线",
                "url": "https://www.skyxinli.com/",
                "url_info": "Sky Psychological Counsultation Center",
                "phone": ["022-60877665"],
                "phone_info": "Tianjin Sky Psychological Counseling Hotline"
            },
            {
                "name": "连心公益热线",
                "url": "http://www.ynlianxin.org/",
                "url_info": "",
                "phone": ["022-60877665"],
                "phone_info": "Lianxin Charity Hotline"
            },
            {
                "name": "陕西省心理热线",
                "url": "http://www.xajwzx.com/",
                "url_info": "",
                "phone": ["4008960960"],
                "phone_info": "Shaanxi Psychological Hotline"
            },
            {
                "name": "大理州心理危机干预热线",
                "url": "",
                "url_info": "",
                "phone": ["0872-2181525"],
                "phone_info": "Dali State Psychological Crisis Intervention Hotline"
            },
            {
                "name": "汉中市24小时心理援助热线",
                "url": "",
                "url_info": "",
                "phone": ["4008096341"],
                "phone_info": "Hanzhong City 24-Hour Psychological Assistance Hotline"
            },
            {
                "name": "东港市心理援助热线",
                "url": "http://www.cs120.com.cn/",
                "url_info": "Donggang Psychiatric Hospital",
                "phone": ["0415-3312000"],
                "phone_info": "Donggang Psychological Assistance Hotline"
            },
            {
                "name": "“新老师”心理咨询热线",
                "url": "http://www.mmhcc.cn/",
                "url_info": "",
                "phone": ["0373-3022889"],
                "phone_info": "“New Teacher” Psychological Counseling Hotline"
            },
            {
                "name": "希望24热线",
                "url": "http://www.hope9995.com/",
                "url_info": "",
                "phone": ["400-161-9995"],
                "phone_info": "Hope 24 Hotline"
            },
            {
                "name": "徐州市心理援助热线",
                "url": "https://www.xzdfyy.com/",
                "url_info": "Xuzhou Oriental People's Hospital",
                "phone": ["0516-69850665", "15950665120"],
                "phone_info": "Xuzhou Psychological Aid Hotline [Call 0516-69850665. Text 15950665120]"
            },
            {
                "name": "保护妇女儿童“爱家热线”",
                "url": "http://www.hnflw.gov.cn/",
                "url_info": "",
                "phone": ["18595469898"],
                "phone_info": "Women and Children “Love Family Hotline”"
            },
            {
                "name": "红枫妇女热线",
                "url": "http://www.maple.org.cn/",
                "url_info": "",
                "phone": ["010-68333388"],
                "phone_info": "Maple Women Hotline"
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Croatia": [
            {
                "name": "Hrabri Telefon",
                "url": "https://www.hrabritelefon.hr/",
                "url_info": "",
                "phone": ["00385 1 165 1122"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Cyprus": [
            {
                "name": "Cyprus Samaritans",
                "url": "http://www.cyprussamaritans.org/",
                "url_info": "",
                "phone": ["8000 7773"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Czech Republic": [
            {
                "name": "Linka bezpečí",
                "url": "https://www.linkabezpeci.cz/",
                "url_info": "",
                "phone": ["116 111"],
                "phone_info": ""
            },
            {
                "name": "Linka důvěry",
                "url": "https://www.linkaduvery.cz/",
                "url_info": "",
                "phone": ["116 123"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Denmark": [
            {
                "name": "Livslinien",
                "url": "https://www.livslinien.dk/",
                "url_info": "",
                "phone": ["70 201 201"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Egypt": [
            {
                "name": "Befrienders Cairo",
                "url": "http://befrienderscairo.com/",
                "url_info": "",
                "phone": ["7622381"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Finland": [
            {
                "name": "Kriisipuhelin",
                "url": "https://mieli.fi/fi/tukea-ja-apua/kriisipuhelin-09-2525-0111",
                "url_info": "",
                "phone": ["09 2525 0111"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "France": [
            {
                "name": "SOS Amitié",
                "url": "https://www.sos-amitie.com/",
                "url_info": "",
                "phone": ["01 45 39 40 00"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Germany": [
            {
                "name": "Telefonseelsorge",
                "url": "https://www.telefonseelsorge.de/",
                "url_info": "",
                "phone": ["0800 111 0 111"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Greece": [
            {
                "name": "Suicide Help Greece",
                "url": "http://suicide-help.gr/",
                "url_info": "",
                "phone": ["1018"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Hong Kong": [
            {
                "name": "The Samaritan Befrienders Hong Kong",
                "url": "https://www.suicide.org.hk/",
                "url_info": "",
                "phone": ["2389 2222"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Hungary": [
            {
                "name": "SOS Telephone and Online Crisis Intervention Service",
                "url": "http://www.sos116-123.hu/",
                "url_info": "",
                "phone": ["116 123"],
                "phone_info": ""
            },
            {
                "name": "Kék Vonal Child Crisis Foundation",
                "url": "https://kek-vonal.hu/",
                "url_info": "",
                "phone": ["116 111"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Iceland": [
            {
                "name": "Slysalaus",
                "url": "https://www.1717.is/",
                "url_info": "",
                "phone": ["1717"],
                "phone_info": ""
            },
            {
                "name": "Mental Health Alliance",
                "url": "https://www.mha.is/",
                "url_info": "",
                "phone": ["1717"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "India": [
            {
                "name": "Vandrevala Foundation",
                "url": "http://www.vandrevalafoundation.com/",
                "url_info": "",
                "phone": ["1860 266 2345"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Ireland": [
            {
                "name": "Samaritans Ireland",
                "url": "https://www.samaritans.org/ireland/samaritans-ireland/",
                "url_info": "",
                "phone": ["116 123"],
                "phone_info": ""
            },
            {
                "name": "Pieta",
                "url": "https://www.pieta.ie/",
                "url_info": "",
                "phone": ["1800 247 247"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Israel": [
            {
                "name": "ERAN - Emotional First Aid by Telephone and Internet",
                "url": "https://www.eran.org.il/",
                "url_info": "",
                "phone": ["1201"],
                "phone_info": ""
            },
            {
                "name": "Israel Association for Suicide Prevention",
                "url": "http://www.iasp.org.il/",
                "url_info": "",
                "phone": ["1201"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Italy": [
            {
                "name": "Telefono Amico",
                "url": "http://www.telefonoamico.it/",
                "url_info": "",
                "phone": ["199 284 284"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Japan": [
            {
                "name": "Tokyo Mental Health",
                "url": "http://www.tokyo-mental-health.jp/suicide_prevention.html",
                "url_info": "",
                "phone": ["0570 00 9090"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Kenya": [
            {
                "name": "Befrienders Kenya",
                "url": "https://www.befrienderskenya.org/",
                "url_info": "",
                "phone": ["+254 722 178 177"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Malaysia": [
            {
                "name": "Befrienders",
                "url": "https://www.befrienders.org.my/",
                "url_info": "",
                "phone": ["03-7956 8145"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Mexico": [
            {
                "name": "Telefono de la Esperanza",
                "url": "https://www.telefonodelaesperanza.org/",
                "url_info": "",
                "phone": ["717 003 717"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Netherlands": [
            {
                "name": "113 Zelfmoordpreventie",
                "url": "https://www.113.nl/",
                "url_info": "",
                "phone": ["0900 0113"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "New Zealand": [
            {
                "name": "Lifeline New Zealand",
                "url": "https://www.lifeline.org.nz/",
                "url_info": "",
                "phone": ["0800 543 354"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Nigeria": [
            {
                "name": "Mental Health Foundation Nigeria",
                "url": "http://www.mentalhealthnigeria.org/",
                "url_info": "",
                "phone": ["0806 011 1157"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Norway": [
            {
                "name": "Kirkens SOS",
                "url": "https://www.kirkens-sos.no/",
                "url_info": "",
                "phone": ["22 40 00 40"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Philippines": [
            {
                "name": "NGF Hope Line",
                "url": "http://www.ngf-hope.org/contact-us/",
                "url_info": "",
                "phone": ["804-HOPE (4673)"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Poland": [
            {
                "name": "Telefon Zaufania dla Dzieci i Młodzieży",
                "url": "http://www.telefonzaufania.org/",
                "url_info": "",
                "phone": ["116 111"],
                "phone_info": ""
            },
            {
                "name": "Ośrodek Pomocy Rodzinie",
                "url": "http://www.116123.pl/",
                "url_info": "",
                "phone": ["116 123"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Portugal": [
            {
                "name": "SOS Voz Amiga",
                "url": "http://www.sosvozamiga.org/",
                "url_info": "",
                "phone": ["21 354 45 45", "91 280 26 69", "96 352 46 60"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Puerto Rico": [
            {
                "name": "Línea PAS",
                "url": "https://www.casem.org/",
                "url_info": "",
                "phone": ["787-644-0355"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Romania": [
            {
                "name": "Alianța Română de Prevenție a Suicidului",
                "url": "http://www.antisuicid.com/",
                "url_info": "",
                "phone": ["0800 801 200"],
                "phone_info": ""
            },
            {
                "name": "Voci Pentru Viață",
                "url": "http://www.vocipentrutine.ro/",
                "url_info": "",
                "phone": ["0800 801 200"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Russia": [
            {
                "name": "Russia Suicide Hotlines",
                "url": "http://www.suicide.org/hotlines/international/russia-suicide-hotlines.html",
                "url_info": "",
                "phone": ["007 8202 577 577"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Singapore": [
            {
                "name": "Samaritans of Singapore",
                "url": "https://www.sos.org.sg/",
                "url_info": "",
                "phone": ["1800 221 4444"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "South Africa": [
            {
                "name": "South African Depression and Anxiety Group",
                "url": "https://www.sadag.org/",
                "url_info": "",
                "phone": ["0800 567 567", "0800 12 13 14"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "South Korea": [
            {
                "name": "Korea Suicide Prevention Center",
                "url": "http://www.lifeline.or.kr/",
                "url_info": "",
                "phone": ["1393"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Spain": [
            {
                "name": "Telefono de la Esperanza",
                "url": "https://www.telefonodelaesperanza.org/",
                "url_info": "",
                "phone": ["717 003 717"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Sweden": [
            {
                "name": "Mind Sverige",
                "url": "https://mind.se/",
                "url_info": "",
                "phone": ["90101"],
                "phone_info": ""
            },
            {
                "name": "1177 Vårdguiden",
                "url": "https://www.1177.se/",
                "url_info": "",
                "phone": ["112"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Switzerland": [
            {
                "name": "Die Dargebotene Hand",
                "url": "https://www.143.ch/",
                "url_info": "",
                "phone": ["143"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Taiwan": [
            {
                "name": "Taiwan Suicide Prevention Center",
                "url": "http://www.tspn.org.tw/",
                "url_info": "",
                "phone": ["0800 668 687"],
                "phone_info": ""
            },
            {
                "name": "Society of Suicidology (SOS)",
                "url": "https://www.soshelpline.org/",
                "url_info": "",
                "phone": ["1995"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Thailand": [
            {
                "name": "Samaritans Thailand",
                "url": "https://www.samaritansthai.com/",
                "url_info": "",
                "phone": ["02 742 4244", "02 742 7733"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Turkey": [
            {
                "name": "Turkish Psychological Association",
                "url": "https://www.psikolog.org.tr/",
                "url_info": "",
                "phone": ["0850 227 1212"],
                "phone_info": ""
            },
            {
                "name": "Istanbul Health and Psychology Association",
                "url": "http://www.istahed.org/",
                "url_info": "",
                "phone": ["0850 234 4100"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Ukraine": [
            {
                "name": "SPAS Lifeline",
                "url": "https://www.facebook.com/spasmailife",
                "url_info": "",
                "phone": ["109"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "United States": [
            {
                "name": "National Suicide Prevention Lifeline",
                "url": "https://suicidepreventionlifeline.org/",
                "url_info": "",
                "phone": ["1-800-273-8255"],
                "phone_info": ""
            },
            {
                "name": "Crisis Text Line",
                "url": "https://www.crisistextline.org/",
                "url_info": "",
                "phone": ["741741"],
                "phone_info": "Text HOME"
            },
            {
                "name": "National Alliance on Mental Illness (NAMI)",
                "url": "https://www.nami.org/",
                "url_info": "",
                "phone": ["1-800-950-6264"],
                "phone_info": "NAMI Helpline"
            },
            {
                "name": "SAMHSA National Helpline",
                "url": "https://www.samhsa.gov/find-help/national-helpline",
                "url_info": "",
                "phone": ["1-800-662-4357"],
                "phone_info": ""
            },
            {
                "name": "Veterans Crisis Line",
                "url": "https://www.veteranscrisisline.net/",
                "url_info": "For veterans",
                "phone": ["1-800-273-8255"],
                "phone_info": "Press 1"
            },
            {
                "name": "The Trevor Project",
                "url": "https://www.thetrevorproject.org/",
                "url_info": "For people who are LGBTQ+",
                "phone": ["1-866-488-7386"],
                "phone_info": "TrevorLifeline"
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "American Foundation for Suicide Prevention (AFSP)",
                "url": "https://afsp.org/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "CDC - Suicide Prevention",
                "url": "https://www.cdc.gov/violenceprevention/suicide/index.html",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "American Association of Suicidology (AAS)",
                "url": "https://suicidology.org/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "United Kingdom": [
            {
                "name": "Samaritans",
                "url": "https://www.samaritans.org/",
                "url_info": "",
                "phone": ["116 123"],
                "phone_info": ""
            },
            {
                "name": "Mind",
                "url": "https://www.mind.org.uk/",
                "url_info": "",
                "phone": ["0300 123 3393"],
                "phone_info": ""
            },
            {
                "name": "NHS - Suicide",
                "url": "https://www.nhs.uk/conditions/suicide/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "PAPYRUS",
                "url": "https://papyrus-uk.org/",
                "url_info": "Hopeline UK",
                "phone": ["0800 068 4141"],
                "phone_info": "For people who are under 35 years old"
            },
            {
                "name": "CALM (Campaign Against Living Miserably)",
                "url": "https://www.calmzone.net/",
                "url_info": "",
                "phone": ["0800 58 58 58"],
                "phone_info": "For men"
            },
            {
                "name": "SANE",
                "url": "https://www.sane.org.uk/",
                "url_info": "Mental Health Support Line",
                "phone": ["0300 304 7000"],
                "phone_info": ""
            },
            {
                "name": "Childline",
                "url": "https://www.childline.org.uk/",
                "url_info": "",
                "phone": ["0800 1111"],
                "phone_info": "For people under 19 years old"
            },
            {
                "name": "Rethink Mental Illness",
                "url": "https://www.rethink.org/",
                "url_info": "Advice Line",
                "phone": ["0300 5000 927"],
                "phone_info": ""
            },
            {
                "name": "Mental Health Foundation",
                "url": "https://www.mentalhealth.org.uk/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Vietnam": [
            {
                "name": "National Child Helpline",
                "url": "http://tongdai111.vn/",
                "url_info": "For youth",
                "phone": ["111"],
                "phone_info": ""
            },
            {
                "name": "Đường dây nóng Ngày Mai",
                "url": "https://duongdaynongngaymai.vn/",
                "url_info": "Hotline Tomorrow",
                "phone": ["963061414"],
                "phone_info": ""
            },
            {
                "name": "Tâm lý NQH",
                "url": "https://tamlynqh.vn/",
                "url_info": "",
                "phone": ["19006186"],
                "phone_info": ""
            },
            {
                "name": "Đường dây nóng hỗ trợ người bị bạo lực giới",
                "url": "https://csaga.org.vn/",
                "url_info": "CSAGA Hotline for gender-based violence survivors",
                "phone": ["024 3333 5599", "(094) 140-9119"],
                "phone_info": "Call 024 3333 5599. Text (094) 140-9119."
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
    {
        "Zimbabwe": [
            {
                "name": "Samaritans Bulawayo",
                "url": "https://www.samaritanspurse.org/",
                "url_info": "",
                "phone": ["263 9 220 630"],
                "phone_info": ""
            },
            {
                "name": "7 Cups",
                "url": "https://www.7cups.com/",
                "url_info": "",
                "phone": [],
                "phone_info": ""
            }
        ]
    },
 
 ];

// Formatted array
const formatted = [
	{
	    "Albania": [
	        {
	            "name": "Alo 116",
	            "url": "https://www.alo116.al",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Argentina": [
	        {
	            "name": "Línea de Prevención Del Suicidio",
	            "url": "https://www.asistenciaalsuicida.org.ar/",
	            "url_info": "",
	            "phone": [
	                "0800 345 1435"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Australia": [
	        {
	            "name": "SANE Australia",
	            "url": "https://www.sane.org/",
	            "url_info": "",
	            "phone": [
	                "1800 187 263"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Beyond Blue",
	            "url": "https://online.beyondblue.org.au/WebModules/Chat/InitialInformation.aspx",
	            "url_info": "",
	            "phone": [
	                "1300 22 4636"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Beyond Blue Coronavirus Mental Wellbeing Support Service",
	            "url": "https://cmwssonline.beyondblue.org.au/",
	            "url_info": "",
	            "phone": [
	                "1800 512 348"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Support Act Wellbeing Helpline",
	            "url": "https://supportact.org.au/",
	            "url_info": "",
	            "phone": [
	                "1800 959 500"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Listening Ear",
	            "url": "https://listeningear.org.au/",
	            "url_info": "",
	            "phone": [
	                "02 9477 6777"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Counselling Online",
	            "url": "https://www.counsellingonline.org.au",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "Lifeline",
	            "url": "https://www.lifeline.org.au",
	            "url_info": "",
	            "phone": [
	                "0477 13 11 14",
	                "13 11 14"
	            ],
	            "phone_info": "Text 0477 13 11 14. Call 13 11 14."
	        },
	        {
	            "name": "PANDA (Perinatal Anxiety and Depression Australia)",
	            "url": "https://www.panda.org.au/",
	            "url_info": "",
	            "phone": [
	                "1300 726 306"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Wellways Helpline",
	            "url": "https://www.wellways.org/our-services/helpline-1300-111-500",
	            "url_info": "",
	            "phone": [
	                "1300 111 500"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kids Helpline",
	            "url": "https://kidshelpline.com.au/",
	            "url_info": "",
	            "phone": [
	                "1800 55 1800"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "eheadspace",
	            "url": "https://headspace.org.au/",
	            "url_info": "",
	            "phone": [
	                "1800 650 890"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "MensLine",
	            "url": "https://mensline.org.au/phone-and-online-counselling/",
	            "url_info": "",
	            "phone": [
	                "1300 65 94 67",
	                "1300 78 99 78"
	            ],
	            "phone_info": "Text 1300 65 94 67. Call 1300 78 99 78."
	        },
	        {
	            "name": "Support Act First Nations Dedicated Support Line",
	            "url": "https://supportact.org.au/",
	            "url_info": "",
	            "phone": [
	                "1800 959 500"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "TIACS",
	            "url": "https://www.tiacs.org/",
	            "url_info": "",
	            "phone": [
	                "0488846988",
	                "0488846988"
	            ],
	            "phone_info": "Text 0488846988. Call 0488846988."
	        },
	        {
	            "name": "Open Arms - Veterans & Families Counselling",
	            "url": "https://www.openarms.gov.au/",
	            "url_info": "",
	            "phone": [
	                "1800 011 046"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Suicide Call Back Service",
	            "url": "https://www.suicidecallbackservice.org.au/phone-and-online-counselling/",
	            "url_info": "",
	            "phone": [
	                "1300 659 467"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Thirrili National Indigenous Postvention Service",
	            "url": "http://thirrili.com.au",
	            "url_info": "",
	            "phone": [
	                "1800 805 801"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Austria": [
	        {
	            "name": "TelefonSeelsorge – Notruf 142",
	            "url": "https://chat.onlineberatung-telefonseelsorge.at/hc/de",
	            "url_info": "",
	            "phone": [
	                "142"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Rat auf Draht",
	            "url": "https://www.rataufdraht.at/chat-beratung",
	            "url_info": "",
	            "phone": [
	                "147"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "time4friends",
	            "url": "https://www.get-social.at/time4friends",
	            "url_info": "",
	            "phone": [
	                "0664-1070-144"
	            ],
	            "phone_info": "Text 0664-1070-144."
	        },
	        {
	            "name": "Pro Mente Vorarlberg - Sozialpsychiatrischer Dienst, Anlaufstelle Jugendliche Nenzing",
	            "url": "https://kijunenzing.line.help/#init",
	            "url_info": "",
	            "phone": [
	                "05525-63829"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pro Mente Vorarlberg - Sozialpsychiatrischer Dienst, Anlaufstelle Jugendliche Dornbirn",
	            "url": "https://kijudornbirn.line.help/#init",
	            "url_info": "",
	            "phone": [
	                "05572-21274"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pro Mente Vorarlberg - Sozialpsychiatrischer Dienst Feldkirch",
	            "url": "https://www.promente-v.at/information/onlineberatung",
	            "url_info": "",
	            "phone": [
	                "050-411-680"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pro Mente Vorarlberg - Sozialpsychiatrischer Dienst Bregenz",
	            "url": "https://www.promente-v.at/information/onlineberatung",
	            "url_info": "",
	            "phone": [
	                "050-411-690"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pro Mente Vorarlberg - Sozialpsychiatrischer Dienst Bludenz",
	            "url": "https://www.promente-v.at/information/onlineberatung",
	            "url_info": "",
	            "phone": [
	                "050-411-670"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pro Mente Vorarlberg - Sozialpsychiatrischer Dienst Dornbirn",
	            "url": "https://www.promente-v.at/information/onlineberatung",
	            "url_info": "",
	            "phone": [
	                "050-411-685"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "NÖ Frauentelefon",
	            "url": "https://www.hilfswerk.at/niederoesterreich/familie-beratung/jugendliche/noe-frauentelefon/",
	            "url_info": "",
	            "phone": [
	                "0800-800-810"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Frauenhelpline Gegen Gewalt",
	            "url": "http://www.frauenhelpline.at/",
	            "url_info": "",
	            "phone": [
	                "0800-222-555"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Bahamas": [
	        {
	            "name": "Bahamas Crisis Centre",
	            "url": "http://www.bahamascrisiscentre.com/",
	            "url_info": "",
	            "phone": [
	                "(242) 328 0922"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Bangladesh": [
	        {
	            "name": "Kaan Pete Roi",
	            "url": "http://shuni.org/",
	            "url_info": "",
	            "phone": [
	                "09612-119911"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Moner Bondhu",
	            "url": "https://www.monerbondhu.org/",
	            "url_info": "",
	            "phone": [
	                "+8801776632344"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Barbados": [
	        {
	            "name": "Samaritans Barbados",
	            "url": "",
	            "url_info": "",
	            "phone": [
	                "(246) 429 9999"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "BPW Safe Haven for Women Crisis Hotline",
	            "url": "https://bpwbarbados.wordpress.com/",
	            "url_info": "",
	            "phone": [
	                "(246) 435-8222",
	                "(246) 845-0623"
	            ],
	            "phone_info": "Text (246) 845-0623. Call (246) 435-8222."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Belarus": [
	        {
	            "name": "Телефон доверия экстренной психологической помощи",
	            "url": "https://mokc.by/",
	            "url_info": "",
	            "phone": [
	                "375 (17) 311-00-99",
	                "375 (29) 101-73-73"
	            ],
	            "phone_info": "Text 375 (29) 101-73-73. Call 375 (17) 311-00-99."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Belgium": [
	        {
	            "name": "Télé-Accueil",
	            "url": "https://www.sos-amitie.com/web/internet/chat",
	            "url_info": "",
	            "phone": [
	                "107"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Centre de Prévention des Violences Conjugales et Familiales",
	            "url": "https://www.cpvcf.org/",
	            "url_info": "",
	            "phone": [
	                "0800 30 030"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Community Help Centre Helpline",
	            "url": "https://www.chsbelgium.org/",
	            "url_info": "",
	            "phone": [
	                "02 648 40 14"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "AWEL",
	            "url": "https://www.awel.be/chat",
	            "url_info": "",
	            "phone": [
	                "102"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "103-Ecoute-Enfants",
	            "url": "https://www.103ecoute.be/",
	            "url_info": "",
	            "phone": [
	                "103"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Centre de Prévention du Suicide",
	            "url": "https://www.preventionsuicide.be/",
	            "url_info": "",
	            "phone": [
	                "0800 32 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Zelfmoordlijn 1813",
	            "url": "https://www.zelfmoord1813.be/ik-heb-hulp-nodig/chat-met-de-zelfmoordlijn",
	            "url_info": "",
	            "phone": [
	                "1813"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Bosnia and Herzegovina": [
	        {
	            "name": "Plavi Telefon - Blue Phone",
	            "url": "https://plavitelefon.ba/",
	            "url_info": "",
	            "phone": [
	                "080 05 03 05"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Brazil": [
	        {
	            "name": "Centro de Valorização da Vida",
	            "url": "https://www.cvv.org.br/",
	            "url_info": "",
	            "phone": [
	                "188"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Bulgaria": [
	        {
	            "name": "Национална телефонна линия за деца - National Telephone Line for Children",
	            "url": "https://116111.bg/",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Национална гореща линия за пострадали от насилие за България",
	            "url": "http://animusassociation.org/programi-uslugi/goreshta-linia",
	            "url_info": "",
	            "phone": [
	                "0800 1 8676"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Burundi": [
	        {
	            "name": "Human Health Aid Burundi",
	            "url": "https://humanhealthaid.com/",
	            "url_info": "",
	            "phone": [
	                "+25769776367",
	                "+25769776367"
	            ],
	            "phone_info": "Text +25769776367. Call +25769776367."
	        },
	        {
	            "name": "SOS FED - SOS Femmes en Detresse",
	            "url": "http://sosfed.org/",
	            "url_info": "",
	            "phone": [
	                "75-33-17-27"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Cambodia": [
	        {
	            "name": "TPO Cambodia Suicide Prevention Helpline",
	            "url": "http://tpocambodia.org/",
	            "url_info": "",
	            "phone": [
	                "017 222 372"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Canada": [
	        {
	            "name": "Kids Help Phone",
	            "url": "https://kidshelpphone.ca/live-chat-counselling/",
	            "url_info": "",
	            "phone": [
	                "1-800-668-6868",
	                "686868"
	            ],
	            "phone_info": "Text 686868. Call 1-800-668-6868."
	        },
	        {
	            "name": "Youthspace.ca",
	            "url": "https://youthspace.ca/",
	            "url_info": "",
	            "phone": [
	                "(778) 783-0177"
	            ],
	            "phone_info": "Text (778) 783-0177."
	        },
	        {
	            "name": "First Nations and Inuit Hope for Wellness Helpline",
	            "url": "https://www.hopeforwellness.ca/",
	            "url_info": "",
	            "phone": [
	                "(855) 242-3310"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Mood Disorders Association of Ontario",
	            "url": "https://mooddisorders.ca/",
	            "url_info": "",
	            "phone": [
	                "1-866-363-6663"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "LGBT National Hotline",
	            "url": "https://www.lgbthotline.org/",
	            "url_info": "",
	            "phone": [
	                "(888) 843-4564"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Certified Listeners Society",
	            "url": "https://certifiedlisteners.org/support/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "NISA Helpline",
	            "url": "https://nisahelpline.com/",
	            "url_info": "",
	            "phone": [
	                "(888) 315-6472"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Talk Suicide Canada",
	            "url": "https://talksuicide.ca/",
	            "url_info": "",
	            "phone": [
	                "45645",
	                "1-833-456-4566"
	            ],
	            "phone_info": "Text 45645. Call 1-833-456-4566."
	        },
	        {
	            "name": "Naseeha Mental Helpline",
	            "url": "https://naseeha.org/",
	            "url_info": "",
	            "phone": [
	                "1-866-627-3342",
	                "1-866-627-3342"
	            ],
	            "phone_info": "Text 1-866-627-3342. Call 1-866-627-3342."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Chile": [
	        {
	            "name": "Psicólogos X Chile",
	            "url": "https://psicologosvoluntarios.cl/",
	            "url_info": "",
	            "phone": [
	                "67613603"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea Libre",
	            "url": "https://www.linealibre.cl/",
	            "url_info": "",
	            "phone": [
	                "1515"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "China": [
	        {
	            "name": "24小时免费心理援助热线电话 Free 24 Hours Helpline",
	            "url": "https://www.gzcrisis.com/",
	            "url_info": "",
	            "phone": [
	                "020-81899120"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "沈阳市心理援助24小时热线 Shenyang Psychological Assistance 24-Hour Hotline",
	            "url": "http://www.symhn.cn/",
	            "url_info": "",
	            "phone": [
	                "024-23813000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "昆明市24小时心理热线 Kunming 24-Hour Psychological Hotline",
	            "url": "https://www.ynjs.com.cn/gyzx/",
	            "url_info": "",
	            "phone": [
	                "0871-65011111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "抚州市心理援助热线 Fuzhou Psychological Assistance Hotline",
	            "url": "http://wjw.jxfz.gov.cn/",
	            "url_info": "",
	            "phone": [
	                "17379487044"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "焦作市24小时心理援助热线 Jiaozuo 24-hour psychological assistance hotline",
	            "url": "http://www.jzsjsby.com/",
	            "url_info": "",
	            "phone": [
	                "0391-3698120"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "“新型冠状病毒感染的肺炎”疫情防控心理援助热线 \"Coronavirus\" Prevention and Control Psychological Assistance Hotline",
	            "url": "http://www.kfwuyuan.com/",
	            "url_info": "",
	            "phone": [
	                "400-1096096"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "许昌市“新冠肺炎”24小时心理援助热线 Xuchang \"Corona Virus\" 24-Hour Psychological Assistance Hotline",
	            "url": "http://www.xcsjayy.com/",
	            "url_info": "",
	            "phone": [
	                "0374-3361021"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "全国咨询热线 National Hotline",
	            "url": "http://www.hbsapc.cn/",
	            "url_info": "",
	            "phone": [
	                "13722875022"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "天津天空心理咨询热线 Tianjin Sky Psychological Counseling Hotline",
	            "url": "https://www.skyxinli.com/",
	            "url_info": "",
	            "phone": [
	                "022-60877665"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "连心公益热线 Lianxin Charity Hotline",
	            "url": "http://www.ynlianxin.org",
	            "url_info": "",
	            "phone": [
	                "0871 6418 3896"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "陕西省心理热线 Shaanxi Psychological Hotline",
	            "url": "http://www.xajwzx.com/",
	            "url_info": "",
	            "phone": [
	                "4008960960"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "大理州心理危机干预热线 Dali State Psychological Crisis Intervention Hotline",
	            "url": "https://www.dlzdermyy.com/",
	            "url_info": "",
	            "phone": [
	                "0872-2181525"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "“新老师”心理咨询热线 \"New Teacher\" Psychological Counseling Hotline",
	            "url": "http://www.mmhcc.cn/",
	            "url_info": "",
	            "phone": [
	                "0373-3022889"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "汉中市24小时心理援助热线 Hanzhong City 24-Hour Psychological Assistance Hotline",
	            "url": "https://www.hzjswszx.com/",
	            "url_info": "",
	            "phone": [
	                "4008096341"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "东港市心理援助热线 Donggang Psychological Assistance Hotline",
	            "url": "http://www.cs120.com.cn/",
	            "url_info": "",
	            "phone": [
	                "0415-3312000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Lifeline",
	            "url": "https://lifelinechina.org/",
	            "url_info": "",
	            "phone": [
	                "400 821 1215"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "希望24热线Hope Line",
	            "url": "http://www.hope9995.com",
	            "url_info": "",
	            "phone": [
	                "400-161-9995"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "徐州市心理援助热线Psychological Aid Hotline of Xuzhou Municipal",
	            "url": "https://www.xzdfyy.com/",
	            "url_info": "",
	            "phone": [
	                "15950665120",
	                "0516-69850665"
	            ],
	            "phone_info": "Text 15950665120. Call 0516-69850665."
	        },
	        {
	            "name": "宝鸡市心理咨询 Psychological Counseling in Baoji City",
	            "url": "http://www.bjskfyy.com/",
	            "url_info": "",
	            "phone": [
	                "09173203366"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "红枫妇女热线Maple Women Hotline",
	            "url": "http://www.maple.org.cn",
	            "url_info": "",
	            "phone": [
	                "010-68333388"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "保护妇女儿童“爱家热线” Women and Children \"Love Family Hotline\"",
	            "url": "http://www.hnflw.gov.cn/",
	            "url_info": "",
	            "phone": [
	                "18595469898"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Colombia": [
	        {
	            "name": "Línea 106 \"El poder de ser escuchado\" Bogotá D.C",
	            "url": "http://www.saludcapital.gov.co/Paginas2/Linea106-Inicio.aspx",
	            "url_info": "",
	            "phone": [
	                "106"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea Salvavidas",
	            "url": "https://www.sergiourrego.org/",
	            "url_info": "",
	            "phone": [
	                "3117668666"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "141 Línea de Protección a Niños, Niñas y Adolescentes",
	            "url": "https://www.icbf.gov.co/noticias/linea-141",
	            "url_info": "",
	            "phone": [
	                "141"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Costa Rica": [
	        {
	            "name": "Línea Aquí Estoy del Colegio De Profesionales en Psicología",
	            "url": "https://psicologiacr.com/aqui-estoy/",
	            "url_info": "",
	            "phone": [
	                "+506 2272-3774"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Croatia": [
	        {
	            "name": "Linija pomoći Plavi telefon",
	            "url": "http://www.plavi-telefon.hr",
	            "url_info": "",
	            "phone": [
	                "00385 1 4833 888"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Psihološki centar Tesa (The Psychological Center Tesa) Helpline",
	            "url": "http://www.tesa.hr/",
	            "url_info": "",
	            "phone": [
	                "01 48 28 888"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Hrabri telefon",
	            "url": "https://hrabritelefon.hr/",
	            "url_info": "",
	            "phone": [
	                "116111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Cyprus": [
	        {
	            "name": "Cyprus Samaritans",
	            "url": "https://www.cyprussamaritans.org/",
	            "url_info": "",
	            "phone": [
	                "8000 7773"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "116000",
	            "url": "https://missingchildreneurope.eu/hotline-116-000/",
	            "url_info": "",
	            "phone": [
	                "116000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Hope for Children Helpline 1466",
	            "url": "https://uncrcpc.org.cy/",
	            "url_info": "",
	            "phone": [
	                "1466"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Czech Republic": [
	        {
	            "name": "Modrá linka",
	            "url": "https://www.modralinka.cz/",
	            "url_info": "",
	            "phone": [
	                "608 902 410"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Most k naději",
	            "url": "http://www.mostknadeji.eu/",
	            "url_info": "",
	            "phone": [
	                "+420476701444"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Linka první psychické pomoci",
	            "url": "https://www.cestazkrize.net",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pražská linka důvěry",
	            "url": "https://www.csspraha.cz/prazska-linka-duvery",
	            "url_info": "",
	            "phone": [
	                "+420 222 580 697"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Linka pro rodinu a školu / Family and School Emergency LIne",
	            "url": "https://linkaztracenedite.cz/chat/",
	            "url_info": "",
	            "phone": [
	                "116 000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Linka bezpečí",
	            "url": "https://www.linkabezpeci.cz/chat",
	            "url_info": "",
	            "phone": [
	                "116111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Denmark": [
	        {
	            "name": "Psykiatrifonden, Mental Health Helpline",
	            "url": "https://psykiatrifonden.dk/hjaelp-raadgivning/raadgivning/chatraadgivning",
	            "url_info": "",
	            "phone": [
	                "39 25 25 25"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Livslinien",
	            "url": "https://www.livslinien.dk",
	            "url_info": "",
	            "phone": [
	                "70 201 201"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "BørneTelefonen",
	            "url": "https://bornetelefonen.dk/",
	            "url_info": "",
	            "phone": [
	                "116 111",
	                "116 111"
	            ],
	            "phone_info": "Text 116 111. Call 116 111."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Djibouti": [
	        {
	            "name": "L’Union Nationale des Femmes Djiboutienne (service d'Écoute)",
	            "url": "https://www.womenconnect.org/web/djibouti/legal-aid",
	            "url_info": "",
	            "phone": [
	                "(+253) 21 35 04 21"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Dominica": [
	        {
	            "name": "Dominica Red Cross",
	            "url": "https://www.dominicaredcross.com/",
	            "url_info": "",
	            "phone": [
	                "(767) 611-4357"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Dominican Republic": [
	        {
	            "name": "Linea Familiar",
	            "url": "https://lineafamiliar.do/",
	            "url_info": "",
	            "phone": [
	                "1 809 636 3507"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea Vivir",
	            "url": "https://institutosaludmental.org/lo-que-hacemos/",
	            "url_info": "",
	            "phone": [
	                "8097792124"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Ecuador": [
	        {
	            "name": "Anima EC",
	            "url": "https://institutoneurociencias.med.ec/",
	            "url_info": "",
	            "phone": [
	                "(593) 99 719 6911",
	                "(593) 99 719 6911"
	            ],
	            "phone_info": "Text (593) 99 719 6911. Call (593) 99 719 6911."
	        },
	        {
	            "name": "Linea de Apoyo a Mujeres, para enfrentar la violencia NO ESTAMOS SOLAS",
	            "url": "https://www.facebook.com/lineadeapoyo/",
	            "url_info": "",
	            "phone": [
	                "2832817",
	                "958934487"
	            ],
	            "phone_info": "Text 958934487. Call 2832817."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Egypt": [
	        {
	            "name": "Stop Silence - Egypt",
	            "url": "https://www.stopsilence.net/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "England": [
	        {
	            "name": "Womankind Helpline",
	            "url": "https://www.womankindbristol.org.uk",
	            "url_info": "",
	            "phone": [
	                "0345 458 2914"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "The Royal British Legion Helpline",
	            "url": "https://www.britishlegion.org.uk",
	            "url_info": "",
	            "phone": [
	                "0808 802 8080"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "The Openness Project Helpline",
	            "url": "https://www.ekrcc.org.uk",
	            "url_info": "",
	            "phone": [
	                "0800 458 2818"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Breaking the Silence Helpline",
	            "url": "https://www.breaking-the-silence.org.uk",
	            "url_info": "",
	            "phone": [
	                "01274 497535"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Maytree Suicide Respite House",
	            "url": "https://www.maytree.org.uk/",
	            "url_info": "",
	            "phone": [
	                "020 7263 7070"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Estonia": [
	        {
	            "name": "Emotsionaalse toe telefon Eluliin",
	            "url": "https://www.eluliin.ee",
	            "url_info": "",
	            "phone": [
	                "655 8088"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Ohvriabi kriisitelefon",
	            "url": "https://sotsiaalkindlustusamet.ee/et/ohvriabi-ennetustoo/116-006-ohvriabi-kriisitelefon",
	            "url_info": "",
	            "phone": [
	                "116006"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Fiji": [
	        {
	            "name": "National Crisis Toll-Free Line",
	            "url": "https://lifelinefiji.com",
	            "url_info": "",
	            "phone": [
	                "1543"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Empower Pacific 24/7 Counselling Helpline",
	            "url": "http://empowerpacific.com/",
	            "url_info": "",
	            "phone": [
	                "2937141",
	                "5626"
	            ],
	            "phone_info": "Text 2937141. Call 5626."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Finland": [
	        {
	            "name": "Mielenterveyden Keskusliitto, Mental Health Helpline",
	            "url": "https://www.mtkl.fi/",
	            "url_info": "",
	            "phone": [
	                "0203 91920"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kriisipuhelin",
	            "url": "https://mieli.fi/tukea-ja-apua/kriisipuhelin",
	            "url_info": "",
	            "phone": [
	                "09 2525 0111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Arabian- ja Englanninkielinen Kriisipuhelin",
	            "url": "https://mieli.fi/fi",
	            "url_info": "",
	            "phone": [
	                "(+3589) 2525-0113"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kriisipuhelin - Svenska",
	            "url": "https://mieli.fi/fi",
	            "url_info": "",
	            "phone": [
	                "09 2525 0112"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "MLL Nuortennetti",
	            "url": "https://www.nuortennetti.fi/",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kirkon keskusteluapua",
	            "url": "https://www.kirkonkeskusteluapua.fi/",
	            "url_info": "",
	            "phone": [
	                "0400 221 180"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "France": [
	        {
	            "name": "SOS Amitié",
	            "url": "https://www.sos-amitie.com/chat/",
	            "url_info": "",
	            "phone": [
	                "09 72 39 40 50"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "3114, numéro national de prévention du suicide",
	            "url": "https://3114.fr/",
	            "url_info": "",
	            "phone": [
	                "3114"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SOS Help - emotional support in English in France",
	            "url": "https://soshelpline.org/",
	            "url_info": "",
	            "phone": [
	                "01-46-21-46-46"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Croix-Rouge écoute",
	            "url": "https://www.croix-rouge.fr/Nos-actions/Action-sociale/Soutien-psychologique-et-isolement-social/Croix-Rouge-Ecoute-service-de-soutien-psychologique-par-telephone",
	            "url_info": "",
	            "phone": [
	                "0-800-858-858"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Ecoute-famille de Unafam-Union Nationale de Familles et Amis de personnes malades et/ ou handicapées psychiques",
	            "url": "https://www.unafam.org/",
	            "url_info": "",
	            "phone": [
	                "01-42-63-03-03"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Association France Dépression - Ecoute patients",
	            "url": "https://francedepression.fr/index.php/contact",
	            "url_info": "",
	            "phone": [
	                "07-84-96-88-28"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Suicide Écoute",
	            "url": "https://www.suicide-ecoute.fr/",
	            "url_info": "",
	            "phone": [
	                "(014) 539-4000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Agri'écoute",
	            "url": "https://www.msa.fr/lfy/solidarite/prevention-suicide",
	            "url_info": "",
	            "phone": [
	                "09-69-39-29-19"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "La Fédération SOS Suicide Phénix France",
	            "url": "https://sos-suicide-phenix.org/",
	            "url_info": "",
	            "phone": [
	                "01-40-44-46-45"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Cellule de soutien psychologique pour les chefs d’entreprises",
	            "url": "https://www.economie.gouv.fr/mise-en-place-cellule-ecoute-soutien-psychologique-chefs-entreprise#",
	            "url_info": "",
	            "phone": [
	                "08-05-65-50-50"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Phare Enfants-Parents",
	            "url": "https://www.phare.org/",
	            "url_info": "",
	            "phone": [
	                "01-43-46-00-62"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Fédération 3977 contre les maltraitances",
	            "url": "https://3977.fr/",
	            "url_info": "",
	            "phone": [
	                "3977"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SOS Homophobie, LGBTIphobias Helpline",
	            "url": "https://www.sos-homophobie.org/",
	            "url_info": "",
	            "phone": [
	                "01 48 06 42 41"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Nightline France (service d'ecoute nocturne pour les etudiants)",
	            "url": "https://www.nightline.fr/",
	            "url_info": "",
	            "phone": [
	                "01 88 32 12 32"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Solitud’écoute - Petits Frères des Pauvres",
	            "url": "https://www.petitsfreresdespauvres.fr/",
	            "url_info": "",
	            "phone": [
	                "08-00-47-47-88"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Collectif Feministe Contre le Viol (CFCV)- Viols Femmes Informations",
	            "url": "https://cfcv.asso.fr/",
	            "url_info": "",
	            "phone": [
	                "0-800-05-95-95",
	                "114"
	            ],
	            "phone_info": "Text 114. Call 0-800-05-95-95."
	        },
	        {
	            "name": "Fondation Le Refuge (Ligne pour les jeunes LGBT+)",
	            "url": "https://www.le-refuge.org/",
	            "url_info": "",
	            "phone": [
	                "06 31 59 69 50",
	                "06 31 59 69 50"
	            ],
	            "phone_info": "Text 06 31 59 69 50. Call 06 31 59 69 50."
	        },
	        {
	            "name": "Fil Santé Jeunes",
	            "url": "https://www.filsantejeunes.com/tchat-individuel",
	            "url_info": "",
	            "phone": [
	                "0800-235-236"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Allo Parents Bébé - Enfance et Partage National",
	            "url": "https://enfance-et-partage.org/",
	            "url_info": "",
	            "phone": [
	                "08-00-00-34-56"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "e-Enfance/3018",
	            "url": "https://e-enfance.org/",
	            "url_info": "",
	            "phone": [
	                "3018"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Ligne Azur",
	            "url": "https://www.ligneazur.org/",
	            "url_info": "",
	            "phone": [
	                "0 810 20 30 40"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "En avant toute(s)- (tchat soutien des jeunes femmes victimes de violences)",
	            "url": "https://enavanttoutes.fr/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "Fédération Nationale des Associations et des Centres de prise en Charge d'Auteurs de Violences conjugales & Familiales (FNACAV)",
	            "url": "http://www.fnacav.fr/",
	            "url_info": "",
	            "phone": [
	                "08-019-019-11"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Gambia": [
	        {
	            "name": "Child Helpline Gambia ( Ministry Of Women Children And Social Welfare)",
	            "url": "https://www.mowcsw.gov.gm/",
	            "url_info": "",
	            "phone": [
	                "199"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Germany": [
	        {
	            "name": "TelefonSeelsorge",
	            "url": "https://online.telefonseelsorge.de/",
	            "url_info": "",
	            "phone": [
	                "0800 111 0 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Muslimisches SeelsorgeTelefon",
	            "url": "https://www.mutes.de/",
	            "url_info": "",
	            "phone": [
	                "030 443 509 821"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Gibraltar": [
	        {
	            "name": "GibSams",
	            "url": "http://www.gibsams.gi/",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Childline Gibraltar",
	            "url": "https://childline.gi/",
	            "url_info": "",
	            "phone": [
	                "8008",
	                "58008288"
	            ],
	            "phone_info": "Text 58008288. Call 8008."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Greece": [
	        {
	            "name": "1018 - 24ωρη Γραμμή Παρέμβασης για την Αυτοκτονία",
	            "url": "http://suicide-help.gr/",
	            "url_info": "",
	            "phone": [
	                "1018"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Εθνική Τηλεφωνική Γραμμή για τα Παιδιά SOS 1056",
	            "url": "https://www.hamogelo.gr/gr/el/paidia-thimata-vias:sos-1056/?fbclid=IwAR1VEEdmP5pu7ahBlyndD2TT_87xFh6Ix6qD-BfeSUId4NZVXyt00pZv14Q",
	            "url_info": "",
	            "phone": [
	                "1056"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Guernsey": [
	        {
	            "name": "Samaritans",
	            "url": "https://www.samaritans.org",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Childline",
	            "url": "https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/",
	            "url_info": "",
	            "phone": [
	                "0800 1111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Guyana": [
	        {
	            "name": "Inter-agency Suicide Prevention Help Line",
	            "url": "https://www.facebook.com/pages/category/Community/Guyana-Inter-Agency-Suicide-Prevention-Helpline-1479461159034151/",
	            "url_info": "",
	            "phone": [
	                "623-4444",
	                "(592) 600-7896"
	            ],
	            "phone_info": "Text 623-4444. Call (592) 600-7896."
	        },
	        {
	            "name": "Guyana 24-Hr Crisis Hotline",
	            "url": "https://www.guyanastandard.com/2019/07/29/24-hour-crisis-hotline-available-to-guyanese-public/?fbclid=IwAR2Jr9d607D7D598D1Q84q7mXDjRxuDoIR9S6eli5XSRw7raKa0X4XnVUBc",
	            "url_info": "",
	            "phone": [
	                "(592) 603-3666"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Haiti": [
	        {
	            "name": "Asistans Sikolojik an IJANS",
	            "url": "https://ahpsy.org.ht/",
	            "url_info": "",
	            "phone": [
	                "2919-9000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Honduras": [
	        {
	            "name": "Teléfono De La Esperanza de San Pedro Sula",
	            "url": "https://www.facebook.com/telefonodelaesperanzasps",
	            "url_info": "",
	            "phone": [
	                "150"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Hong Kong": [
	        {
	            "name": "撒瑪利亞會 The Samaritans, 24 Hour Multi-Lingual Suicide Prevention Services",
	            "url": "https://samaritans.org.hk/",
	            "url_info": "",
	            "phone": [
	                "2896 0000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "香港撒瑪利亞防止自殺會 24 小時情緒支援熱線（廣東話）The Samaritan Befrienders Hong Kong 24-Hour Emotional Support Hotline (Cantonese)",
	            "url": "https://chatpoint.org.hk/",
	            "url_info": "",
	            "phone": [
	                "+852-2389 2222"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "24小时预防自杀热线服务24-hour Suicide Prevention Hotline Service",
	            "url": "https://saysomething.solutiononehk.com/SPS/",
	            "url_info": "",
	            "phone": [
	                "852-2382-0000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "English Emotional Support Hotline",
	            "url": "https://chatpoint.org.hk/",
	            "url_info": "",
	            "phone": [
	                "2389 2223"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "自杀者亲友支援计划Services for Survivors of Suicide Loss",
	            "url": "https://www.sps.org.hk",
	            "url_info": "",
	            "phone": [
	                "23822737"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "协青社24小时热线服务24 Hours Hotline of Youth Outreach",
	            "url": "https://www.yo.org.hk",
	            "url_info": "",
	            "phone": [
	                "90881023"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "向晴热线Caritas-Hong Kong Family Crisis Support Centre Crisis Hotline",
	            "url": "https://fcsc.caritas.org.hk/",
	            "url_info": "",
	            "phone": [
	                "18288"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "财困压力辅导专线Financial Stress Counselling Hotline",
	            "url": "https://fcsc.caritas.org.hk/",
	            "url_info": "",
	            "phone": [
	                "31610102"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "青少年生命专线Youth Link",
	            "url": "https://www.sps.org.hk",
	            "url_info": "",
	            "phone": [
	                "23820777"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "珍爱生命长者热线Hotline for Elderly",
	            "url": "https://www.sps.org.hk",
	            "url_info": "",
	            "phone": [
	                "23820881"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Caritas Infinity Teens",
	            "url": "http://it.caritas.org.hk/",
	            "url_info": "",
	            "phone": [
	                "93773666"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "预防长者自杀服务Suicide Prevention Services for the Elderly",
	            "url": "https://www.sps.org.hk",
	            "url_info": "",
	            "phone": [
	                "23822007"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "和諧之家24小時婦女求助熱線 / Harmony House 24-hour Woman Hotline",
	            "url": "https://www.harmonyhousehk.org/chi/hotlines",
	            "url_info": "",
	            "phone": [
	                "2522 0434"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "男士热线 / Harmony House Man Hotline",
	            "url": "https://www.harmonyhousehk.org/chi/hotlines",
	            "url_info": "",
	            "phone": [
	                "2295 1386"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "婦女求助熱線 Women’s Helpline",
	            "url": "https://womencentre.org.hk/Zh/Services/counselling/womenhelpline/",
	            "url_info": "",
	            "phone": [
	                "23866255"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "小白兔心声儿童热线 / Harmony House Children Hotline",
	            "url": "https://www.harmonyhousehk.org/chi/hotlines",
	            "url_info": "",
	            "phone": [
	                "2751 8822"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "亲友自杀危机咨询专线Suicide Crisis Consultation Helpline for Family Members and Friends",
	            "url": "https://www.sbhk.org.hk/scic_service.php",
	            "url_info": "",
	            "phone": [
	                "852-23191177"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "即时通24小时公众热线Justone 24-hour Public Hotline",
	            "url": "https://reurl.cc/R0jMRn",
	            "url_info": "",
	            "phone": [
	                "35122626"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Hungary": [
	        {
	            "name": "Telefonos Lelkisegély-szolgálat",
	            "url": "https://sos116-123.hu",
	            "url_info": "",
	            "phone": [
	                "116123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kék Vonal Gyermekkrízis Alapítvány",
	            "url": "https://kek-vonal.hu/",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Iceland": [
	        {
	            "name": "Hjálparsími Rauða krossins 1717",
	            "url": "https://www.raudikrossinn.is/verkefni/innanlandsverkefni/heilbrigdi-og-velferd/hjalparsiminn-1717-og-netspjallid/",
	            "url_info": "",
	            "phone": [
	                "1717"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "India": [
	        {
	            "name": "Samaritans Mumbai",
	            "url": "http://www.samaritansmumbai.org",
	            "url_info": "",
	            "phone": [
	                "+91 84229 84528"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "ND Prana Lifeline",
	            "url": "https://ngchandrancharities.org/",
	            "url_info": "",
	            "phone": [
	                "1800 121 203040",
	                "+91 8489512307"
	            ],
	            "phone_info": "Text +91 8489512307. Call 1800 121 203040."
	        },
	        {
	            "name": "MPower Mind Matters , 24/7 Mental Health Support Helpline",
	            "url": "https://mpowerminds.com/oneonone",
	            "url_info": "",
	            "phone": [
	                "1800-120-820050"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Jeevan Aastha Helpline, Suicide prevention and Mental Health Counseling Helpline",
	            "url": "https://www.jeevanaastha.com/",
	            "url_info": "",
	            "phone": [
	                "1800 233 3330"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Sneha Suicide Prevention Helpline",
	            "url": "https://snehaindia.org/new/",
	            "url_info": "",
	            "phone": [
	                "+91 44 2464 0050"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Parivarthan Counselling Helpline",
	            "url": "https://parivarthan.org/counselling-helpline/",
	            "url_info": "",
	            "phone": [
	                "+91 7676602602"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Snehi Helpline, Crisis intervention counselling support",
	            "url": "https://www.snehi.org.in/",
	            "url_info": "",
	            "phone": [
	                "9582208181",
	                "9582208181"
	            ],
	            "phone_info": "Text 9582208181. Call 9582208181."
	        },
	        {
	            "name": "iCALL",
	            "url": "https://icallhelpline.org/",
	            "url_info": "",
	            "phone": [
	                "915 298 7821"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Voice That Cares",
	            "url": "https://www.rocf.org/voice-that-cares/",
	            "url_info": "",
	            "phone": [
	                "8448-8448-45"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Connecting NGO, Help Save A Life",
	            "url": "https://connectingngo.org/",
	            "url_info": "",
	            "phone": [
	                "9922004305"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "NIMHANS Psychosocial Support Helpline",
	            "url": "https://nimhans.ac.in/pssmhs-helpline/",
	            "url_info": "",
	            "phone": [
	                "080 4611 0007"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Lifeline Foundation",
	            "url": "http://www.lifelinefoundation.in/",
	            "url_info": "",
	            "phone": [
	                "9088030303"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kiran, 24/7 National Toll free Mental Health Rehabilitation Helpline",
	            "url": "https://static.pib.gov.in/WriteReadData/userfiles/FINAL%20PPT%20Mental%20Health.pdf",
	            "url_info": "",
	            "phone": [
	                "1800-599-0019"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "1 Life, Crisis Support, Suicide Prevention",
	            "url": "https://1life.org.in/",
	            "url_info": "",
	            "phone": [
	                "78930-78930"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Vandrevala Foundation crisis intervention helpline",
	            "url": "https://www.vandrevalafoundation.com",
	            "url_info": "",
	            "phone": [
	                "+91 9999 666 555",
	                "+91 9999 666 555"
	            ],
	            "phone_info": "Text +91 9999 666 555. Call +91 9999 666 555."
	        },
	        {
	            "name": "Mann Talks",
	            "url": "https://www.manntalks.org/",
	            "url_info": "",
	            "phone": [
	                "86861 39139"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Iran": [
	        {
	            "name": "Iran Crisis Text Line",
	            "url": "https://irancrisisline.org/get-help/text/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "صدای یارا - Yara's Voice",
	            "url": "https://www.irsprc.org/sedaye-yara/",
	            "url_info": "",
	            "phone": [
	                "42152"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Ireland": [
	        {
	            "name": "50808 - Text About It",
	            "url": "http://text50808.ie",
	            "url_info": "",
	            "phone": [
	                "50808"
	            ],
	            "phone_info": "Text 50808."
	        },
	        {
	            "name": "Samaritans (Ireland)",
	            "url": "https://www.samaritans.org/samaritans-ireland/",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "National Freephone Careline",
	            "url": "https://familycarers.ie/",
	            "url_info": "",
	            "phone": [
	                "1800 24 07 24"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Connect Counselling",
	            "url": "https://connectcounselling.ie/",
	            "url_info": "",
	            "phone": [
	                "1800 477 477"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Childline",
	            "url": "https://www.childline.ie/login/",
	            "url_info": "",
	            "phone": [
	                "50101",
	                "1800 66 66 66"
	            ],
	            "phone_info": "Text 50101. Call 1800 66 66 66."
	        },
	        {
	            "name": "Missing Childrens Hotline",
	            "url": "https://www.ispcc.ie/missing-childrens-hotline/I",
	            "url_info": "",
	            "phone": [
	                "116 000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Donegal Women’s Centre",
	            "url": "http://donegalwomenscentre.ie/",
	            "url_info": "",
	            "phone": [
	                "074 912 4985"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Jigsaw",
	            "url": "https://jigsaw.ie/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "Towards Healing",
	            "url": "https://towardshealing.ie/",
	            "url_info": "",
	            "phone": [
	                "1800 303 416",
	                "(085) 802-2859"
	            ],
	            "phone_info": "Text (085) 802-2859. Call 1800 303 416."
	        },
	        {
	            "name": "Pieta",
	            "url": "https://www.pieta.ie/",
	            "url_info": "",
	            "phone": [
	                "1800 247 247",
	                "51444"
	            ],
	            "phone_info": "Text 51444. Call 1800 247 247."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Israel": [
	        {
	            "name": "Sahar",
	            "url": "https://sahar.org.il/chat-assistance/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "ERAN - Emotional First Aid",
	            "url": "https://en.eran.org.il/",
	            "url_info": "",
	            "phone": [
	                "1201",
	                "0529993544"
	            ],
	            "phone_info": "Text 0529993544. Call 1201."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Italy": [
	        {
	            "name": "Telefono Amico Cevita",
	            "url": "https://telefonoamicocevita.it/",
	            "url_info": "",
	            "phone": [
	                "+39 02 99777"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefono Amico Italia",
	            "url": "https://www.telefonoamico.it/",
	            "url_info": "",
	            "phone": [
	                "02 2327 2327"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefono Azzurro",
	            "url": "https://azzurro.it/",
	            "url_info": "",
	            "phone": [
	                "19696"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Jamaica": [
	        {
	            "name": "Mental Health and Suicide Prevention Helpline",
	            "url": "https://www.moh.gov.jm/mental-health/",
	            "url_info": "",
	            "phone": [
	                "(888) 639-5433"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "U-Matter",
	            "url": "https://jamaica.ureport.in/page/umatterprivacypolicy/",
	            "url_info": "",
	            "phone": [
	                "876-838-4897"
	            ],
	            "phone_info": "Text 876-838-4897."
	        },
	        {
	            "name": "SafeSpot",
	            "url": "https://safespotja.com/",
	            "url_info": "",
	            "phone": [
	                "888-723-3776",
	                "876-439-5199"
	            ],
	            "phone_info": "Text 876-439-5199. Call 888-723-3776."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Japan": [
	        {
	            "name": "TELL Lifeline",
	            "url": "https://telljp.com/lifeline/tell-chat/",
	            "url_info": "",
	            "phone": [
	                "03-5774-0992"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "ChildLine",
	            "url": "https://childline.or.jp/chat",
	            "url_info": "",
	            "phone": [
	                "(012) 099-7777"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "＃いのちSOS",
	            "url": "https://www.lifelink.or.jp/inochisos/",
	            "url_info": "",
	            "phone": [
	                "0120 061 338"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Jersey": [
	        {
	            "name": "Samaritans",
	            "url": "https://www.samaritans.org",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Childline",
	            "url": "https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/",
	            "url_info": "",
	            "phone": [
	                "0800 1111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "YES",
	            "url": "https://www.yes.je/",
	            "url_info": "",
	            "phone": [
	                "0800 7350 010"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Jordan": [
	        {
	            "name": "JCPA Hotline",
	            "url": "https://www.facebook.com/Jordanian-Clinical-Psychologists-Association-987247728018555",
	            "url_info": "",
	            "phone": [
	                "962795440416",
	                "962 7 9544 0416"
	            ],
	            "phone_info": "Text 962795440416. Call 962 7 9544 0416."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Kazakhstan": [
	        {
	            "name": "балалар мен жасөспірімдерге арналған сенім телефоны No150",
	            "url": "https://www.telefon150.kz/",
	            "url_info": "",
	            "phone": [
	                "150"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Kenya": [
	        {
	            "name": "Befriender's Kenya",
	            "url": "http://www.befrienderskenya.org/",
	            "url_info": "",
	            "phone": [
	                "(072) 217-8177"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "South Korea": [
	        {
	            "name": "자살예방상담전화 1393",
	            "url": "http://www.129.go.kr/1393/",
	            "url_info": "",
	            "phone": [
	                "1393"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "사랑의전화 상담실 - Love Call Center",
	            "url": "http://www.counsel24.com/",
	            "url_info": "",
	            "phone": [
	                "1566-2525"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "정신건강복지센터 정신건강위기상담전화 Mental Health Center Crisis Counseling",
	            "url": "https://www.061mind.or.kr/",
	            "url_info": "",
	            "phone": [
	                "1577-0199"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "희망의 전화 129!",
	            "url": "https://accounts.kakao.com/login?continue=https%3A%2F%2Fbizmessage.kakao.com%2Fchat%2Fs_GCEANNQ_YKvlqQ51jHkQ%3Frf%3Dhttp%3A%2F%2Fwww.129.go.kr%2F",
	            "url_info": "",
	            "phone": [
	                "129"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Kosovo": [
	        {
	            "name": "Linja e Jetës",
	            "url": "https://qips.quantech-ks.com/linja-e-jetes/",
	            "url_info": "",
	            "phone": [
	                "0800 12345"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Latvia": [
	        {
	            "name": "Vienotais krīzes tālrunis",
	            "url": "https://www.skalbes.lv/",
	            "url_info": "",
	            "phone": [
	                "116123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Child Helpline 116111",
	            "url": "https://uzticibastalrunis.lv",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Lebanon": [
	        {
	            "name": "The Lifeline",
	            "url": "https://embracelebanon.org/",
	            "url_info": "",
	            "phone": [
	                "1564"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Libya": [
	        {
	            "name": "‎فريق الدعم النفس اجتماعي -ليبيا - Libyan Psychosocial Support Team",
	            "url": "https://www.facebook.com/%D9%81%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D9%86%D9%81%D8%B3-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A-%D9%84%D9%8A%D8%A8%D9%8A%D8%A7-Libyan-Psychosocial-Support-Team-1617969611764812/",
	            "url_info": "",
	            "phone": [
	                "1417",
	                "00218923978252"
	            ],
	            "phone_info": "Text 00218923978252. Call 1417."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Lithuania": [
	        {
	            "name": "Pagalbos smurtą patyrusiems linija",
	            "url": "https://www.specializuotospagalboscentras.lt/",
	            "url_info": "",
	            "phone": [
	                "8 700 55516"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Vilties linija",
	            "url": "https://www.viltieslinija.lt/",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Nelik vienas",
	            "url": "https://nelikvienas.lt/",
	            "url_info": "",
	            "phone": [
	                "8 604 11119"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pagalbos Moterims Linija",
	            "url": "https://pagalbosmoterimslinija.lt/",
	            "url_info": "",
	            "phone": [
	                "8 800 66366"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Sidabrinė linija (the Silver Line)",
	            "url": "https://www.sidabrinelinija.lt/",
	            "url_info": "",
	            "phone": [
	                "8 800 800 20"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Jaunimo linija",
	            "url": "https://jaunimolinija.lt/lt/pagalba/pagalba-pokalbiais-internetu/",
	            "url_info": "",
	            "phone": [
	                "8 800 28888"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Vaikų Linija (Child Line)",
	            "url": "https://www.vaikulinija.lt/",
	            "url_info": "",
	            "phone": [
	                "116111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Vyrų linija",
	            "url": "https://www.vyrulinija.lt/",
	            "url_info": "",
	            "phone": [
	                "8 670 00027"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Luxembourg": [
	        {
	            "name": "SOS Détresse",
	            "url": "https://454545.lu/",
	            "url_info": "",
	            "phone": [
	                "454545"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Centre psycho-social et d'accompagnement scolaires - service d'ecoute/helpline",
	            "url": "https://cepas.public.lu/fr/actualites/2021/sante-mentale.html",
	            "url_info": "",
	            "phone": [
	                "8002-9393"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Elterentelefon - Ecoute parents (KJT)",
	            "url": "https://www.kjt.lu/fr/ecoute-parents/",
	            "url_info": "",
	            "phone": [
	                "26-640-555"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Malaysia": [
	        {
	            "name": "Malaysian Mental Health Association (MMHA)",
	            "url": "https://mmha.org.my/",
	            "url_info": "",
	            "phone": [
	                "03 2780 6803"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "TALIAN HEAL 15555 Helpline",
	            "url": "https://www.mkn.gov.my/web/ms/2022/11/25/talian-heal-15555/",
	            "url_info": "",
	            "phone": [
	                "15555"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "MIASA Crisis Helpline",
	            "url": "https://miasa.org.my/",
	            "url_info": "",
	            "phone": [
	                "1-800-18-0066"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pertubuhan Kebajikan Sneham (Sneham Welfare Organisation Malaysia) Malaysia",
	            "url": "https://www.facebook.com/snehammalaysia/",
	            "url_info": "",
	            "phone": [
	                "+60443988597",
	                "010 200 5722"
	            ],
	            "phone_info": "Text 010 200 5722. Call +60443988597."
	        },
	        {
	            "name": "Befrienders Kuala Lumpur",
	            "url": "https://www.befrienders.org.my/",
	            "url_info": "",
	            "phone": [
	                "0376272929"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Buddy Bear Childline",
	            "url": "https://www.facebook.com/buddybear.humankind/",
	            "url_info": "",
	            "phone": [
	                "1800182327"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Life Line Association Malaysia",
	            "url": "https://lifeline.org.my/7995/",
	            "url_info": "",
	            "phone": [
	                "0342657995"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Malta": [
	        {
	            "name": "Crisis Resolution Malta",
	            "url": "https://m.facebook.com/CrisisResolutionMalta/",
	            "url_info": "",
	            "phone": [
	                "9933 9966",
	                "9933 9966"
	            ],
	            "phone_info": "Text 9933 9966. Call 9933 9966."
	        },
	        {
	            "name": "Supportline 179",
	            "url": "https://fsws.gov.mt/en/appogg/Pages/supportline.aspx",
	            "url_info": "",
	            "phone": [
	                "179"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kellimni",
	            "url": "https://kellimni.com",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Mauritius": [
	        {
	            "name": "SOS Femmes Mauritius (Helpline for Women)",
	            "url": "http://sosfemmes-mu.com/",
	            "url_info": "",
	            "phone": [
	                "233-3054"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Mexico": [
	        {
	            "name": "Oceánica Helpline",
	            "url": "https://oceanica.com.mx/",
	            "url_info": "",
	            "phone": [
	                "55 8854 7141"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Atención Psicológica A Distancia UNAM",
	            "url": "http://www.psicologia.unam.mx/centros-de-formacion/",
	            "url_info": "",
	            "phone": [
	                "+5255 5025 0855"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea De La Vida",
	            "url": "https://www.gob.mx/salud/conadic/acciones-y-programas/centro-de-atencion-ciudadana-contra-las-adicciones-134381",
	            "url_info": "",
	            "phone": [
	                "800 911 2000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SAPTEL",
	            "url": "https://www.saptel.org.mx/",
	            "url_info": "",
	            "phone": [
	                "555-259-8121"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Moldova": [
	        {
	            "name": "Linia Verde Prevenire Suicid",
	            "url": "https://pentruviata.md/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefon Copilului",
	            "url": "https://telefonulcopilului.md/",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Mongolia": [
	        {
	            "name": "Сэтгэцийн эрүүл мэндийн мэдээлэл өгөх утас 1800-2000",
	            "url": "https://ncmh.gov.mn",
	            "url_info": "",
	            "phone": [
	                "1800-2000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Morocco": [
	        {
	            "name": "Stop Silence",
	            "url": "https://www.stopsilence.net/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Nepal": [
	        {
	            "name": "TPO Nepal",
	            "url": "http://www.tponepal.org/",
	            "url_info": "",
	            "phone": [
	                "+977 9847386158",
	                "+977 16600102005"
	            ],
	            "phone_info": "Text +977 9847386158. Call +977 16600102005."
	        },
	        {
	            "name": "११६६ आत्महत्या रोकथामको लागि राष्ट्रिय हेल्पलाईन",
	            "url": "https://www.facebook.com/1166helpline",
	            "url_info": "",
	            "phone": [
	                "1166"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "CMC Hotline",
	            "url": "http://www.cmcnepal.org.np/",
	            "url_info": "",
	            "phone": [
	                "16600185080"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Patan Hospital Suicide Hotline",
	            "url": "https://www.pahs.edu.np/pahs-community/hospital/",
	            "url_info": "",
	            "phone": [
	                "9813476123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Mental Health Promotion & Suicide Prevention Center",
	            "url": "https://mhpspc.org.np/?fbclid=IwAR1a5oxVmG4gtmmvyVLZxZ3kN209AzKowqiWq6Iypey6V0BNXqPeDTI5ico",
	            "url_info": "",
	            "phone": [
	                "+977-01-4411264"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Netherlands": [
	        {
	            "name": "MIND Korrelatie",
	            "url": "https://mindkorrelatie.nl/",
	            "url_info": "",
	            "phone": [
	                "0900 1450"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "de Luisterlijn",
	            "url": "https://www.deluisterlijn.nl/",
	            "url_info": "",
	            "phone": [
	                "088 0767 000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "113 Zelfmoordpreventie",
	            "url": "https://www.113.nl/chatten",
	            "url_info": "",
	            "phone": [
	                "0800-0113"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "De Kindertelefoon",
	            "url": "https://www.kindertelefoon.nl/",
	            "url_info": "",
	            "phone": [
	                "0800 0432"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Alles oké? Supportlijn",
	            "url": "https://www.allesoke.nl/",
	            "url_info": "",
	            "phone": [
	                "0800-0450"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "New Zealand": [
	        {
	            "name": "Lifeline",
	            "url": "https://www.lifeline.org.nz/",
	            "url_info": "",
	            "phone": [
	                "4357",
	                "0800 543 354"
	            ],
	            "phone_info": "Text 4357. Call 0800 543 354."
	        },
	        {
	            "name": "1737 Need to talk?",
	            "url": "https://www.1737.org.nz",
	            "url_info": "",
	            "phone": [
	                "1737",
	                "1737"
	            ],
	            "phone_info": "Text 1737. Call 1737."
	        },
	        {
	            "name": "Depression Helpline",
	            "url": "https://www.depression.org.nz/",
	            "url_info": "",
	            "phone": [
	                "4202",
	                "0800 111 757"
	            ],
	            "phone_info": "Text 4202. Call 0800 111 757."
	        },
	        {
	            "name": "Samaritans Aotearoa",
	            "url": "http://samaritans.org.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 726 666"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "0800 ANXIETY Helpline",
	            "url": "https://www.anxiety.org.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 269 4389"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Youthline",
	            "url": "https://www.youthline.co.nz/web-chat-counselling.html",
	            "url_info": "",
	            "phone": [
	                "234",
	                "0800 376 633"
	            ],
	            "phone_info": "Text 234. Call 0800 376 633."
	        },
	        {
	            "name": "Asian Family Services",
	            "url": "https://www.asianfamilyservices.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 862 342"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Ola Lelei Pacific Helpline",
	            "url": "https://www.vakatautua.co.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 652 535"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Rural Support Trusts",
	            "url": "https://www.rural-support.org.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 787 254"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "The Lowdown – Youth Helpline",
	            "url": "https://www.thelowdown.co.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 111 757",
	                "5626"
	            ],
	            "phone_info": "Text 5626. Call 0800 111 757."
	        },
	        {
	            "name": "0800 What's Up",
	            "url": "https://www.whatsup.co.nz/getting-in-touch/",
	            "url_info": "",
	            "phone": [
	                "0800 942 8787"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Suicide Crisis Helpline- Tautoko",
	            "url": "https://www.lifeline.org.nz/services/suicide-crisis-helpline",
	            "url_info": "",
	            "phone": [
	                "0508 828 865",
	                "4357"
	            ],
	            "phone_info": "Text 4357. Call 0508 828 865."
	        },
	        {
	            "name": "Victim Support - Manaaki Tangata",
	            "url": "https://www.victimsupport.org.nz/",
	            "url_info": "",
	            "phone": [
	                "0800 842 846"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Nigeria": [
	        {
	            "name": "SURPIN Helpline Nigeria",
	            "url": "https://www.surpinng.com/",
	            "url_info": "",
	            "phone": [
	                "080 0078 7746"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Child Help-Line",
	            "url": "https://hdinigeria.org/hdinigeria/hdi-child-helpline/",
	            "url_info": "",
	            "phone": [
	                "0808 0551 376",
	                "0808 0551 376"
	            ],
	            "phone_info": "Text 0808 0551 376. Call 0808 0551 376."
	        },
	        {
	            "name": "Mentally Aware Nigeria Initiative (MANI)",
	            "url": "https://mentallyaware.org/emergency/",
	            "url_info": "",
	            "phone": [
	                "(809) 111-6264",
	                "(809) 111-6264"
	            ],
	            "phone_info": "Text (809) 111-6264. Call (809) 111-6264."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "North Macedonia": [
	        {
	            "name": "Психолошка поддршка на возрасни лица во самоизолација - Psychological support for people in self-isolation",
	            "url": "https://koronavirus.gov.mk/pomos-neregularnosti/psiholoshka-poddrshka",
	            "url_info": "",
	            "phone": [
	                "072 919 009"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Трудниците и родилките на кои им е потребна психолошка поддршка - Pregnant Women and Mothers In Need Psychological Support",
	            "url": "https://koronavirus.gov.mk/pomos-neregularnosti/psiholoshka-poddrshka",
	            "url_info": "",
	            "phone": [
	                "078 378 766"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Психолошка поддршка за лица со нарушување на слухот, говорот и гласот - Psychological Support for People with Hearing, Speech and Voice Disorders",
	            "url": "https://koronavirus.gov.mk/pomos-neregularnosti/psiholoshka-poddrshka",
	            "url_info": "",
	            "phone": [
	                "072 919 009"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Психолошка поддршка за родители на деца со попреченост - Psychological Support for Parents of Children with Disabilities",
	            "url": "https://koronavirus.gov.mk/pomos-neregularnosti/psiholoshka-poddrshka",
	            "url_info": "",
	            "phone": [
	                "070 291 574"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Психолошка поддршка на родители на деца од предучилишна и училишна возраст - Psychological support for parents of preschool and school children",
	            "url": "https://koronavirus.gov.mk/pomos-neregularnosti/psiholoshka-poddrshka",
	            "url_info": "",
	            "phone": [
	                "072 912 676"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Northern Ireland": [
	        {
	            "name": "Lifeline",
	            "url": "https://www.lifelinehelpline.info",
	            "url_info": "",
	            "phone": [
	                "18001 0808 808 8000",
	                "0808 808 8000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Rural Support Helpline",
	            "url": "https://www.ruralsupport.org.uk",
	            "url_info": "",
	            "phone": [
	                "0800 138 1678"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "ParentingNI Infomation and Support Line",
	            "url": "https://www.parentingni.org",
	            "url_info": "",
	            "phone": [
	                "0808 801 0722"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Norway": [
	        {
	            "name": "Alltidhjelp.no",
	            "url": "https://alltidhjelp.no/",
	            "url_info": "",
	            "phone": [
	                "+47 48425289",
	                "+47 48046276"
	            ],
	            "phone_info": "Text +47 48046276. Call +47 48425289."
	        },
	        {
	            "name": "Mental Helse Hjelpetelefonen",
	            "url": "https://mentalhelse.no/",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kirkens SOS",
	            "url": "https://www.soschat.no/",
	            "url_info": "",
	            "phone": [
	                "22 40 00 40"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Alarmtelefonen for barn og unge",
	            "url": "http://www.116111.no/",
	            "url_info": "",
	            "phone": [
	                "417 16 111",
	                "116 111"
	            ],
	            "phone_info": "Text 417 16 111. Call 116 111."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Pakistan": [
	        {
	            "name": "Rozan Counseling Helpline",
	            "url": "https://rozan.org",
	            "url_info": "",
	            "phone": [
	                "0304 111 1741"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Child Helpline, Child Protection and Welfare Bureau",
	            "url": "https://cpwb.punjab.gov.pk/",
	            "url_info": "",
	            "phone": [
	                "1121"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Panama": [
	        {
	            "name": "Te Escucho Panama",
	            "url": "https://www.teescuchopanama.org/",
	            "url_info": "",
	            "phone": [
	                "831-7600"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Tía Elaine Helpline",
	            "url": "https://senniaf.gob.pa/?page_id=16121",
	            "url_info": "",
	            "phone": [
	                "6378-3466"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Papua New Guinea": [
	        {
	            "name": "1-TOK Kaunselin Helpim Lain",
	            "url": "https://www.facebook.com/1TokHelpimLain",
	            "url_info": "",
	            "phone": [
	                "7150-8000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Peru": [
	        {
	            "name": "Infosalud Perú",
	            "url": "https://www.gob.pe/555-recibir-informacion-y-orientacion-en-salud",
	            "url_info": "",
	            "phone": [
	                "113"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "La Voz Amiga",
	            "url": "http://www.lavozamigaperu.org/",
	            "url_info": "",
	            "phone": [
	                "0800 4 1212"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea 100",
	            "url": "https://www.gob.pe/481-ayuda-contra-la-violencia-familiar-y-sexual-linea-100",
	            "url_info": "",
	            "phone": [
	                "100"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Philippines": [
	        {
	            "name": "NCMH Crisis Hotline",
	            "url": "https://www.ncmhusaptayo.com",
	            "url_info": "",
	            "phone": [
	                "1800-1888-1553"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "HOPELINE",
	            "url": "https://www.ngf-mindstrong.org/hopeline-ph",
	            "url_info": "",
	            "phone": [
	                "(02) 8804-4673"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "In Touch: Crisis Line",
	            "url": "https://www.in-touch.org/",
	            "url_info": "",
	            "phone": [
	                "+63 2 8893 7603"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Poland": [
	        {
	            "name": "Centrum Wsparcia",
	            "url": "https://centrumwsparcia.pl/",
	            "url_info": "",
	            "phone": [
	                "800 70 2222"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefon zaufania migrantów i migrantek",
	            "url": "https://slowopomoc.pl/",
	            "url_info": "",
	            "phone": [
	                "+48 22 255 22 02"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Olsztyńskie Stowarzyszenie Pomocy Telefoniczej (Olsztyn Telephone Emergency Help Association)",
	            "url": "http://telefonzaufania.org/",
	            "url_info": "",
	            "phone": [
	                "+48 601 665025",
	                "+48 89 527 00 00"
	            ],
	            "phone_info": "Text +48 601 665025. Call +48 89 527 00 00."
	        },
	        {
	            "name": "Anonimowy Przyjaciel (Anonymous friend)",
	            "url": "https://www.telefonzaufania.org.pl/",
	            "url_info": "",
	            "phone": [
	                "895270000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "TelefonPogadania.pl",
	            "url": "https://telefonpogadania.pl/",
	            "url_info": "",
	            "phone": [
	                "800 012 005"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Stowarzyszenie Animo - Odważ się żyć!",
	            "url": "https://stowarzyszenieanimo.pl/",
	            "url_info": "",
	            "phone": [
	                "22 270 11 65"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefon Zaufania uzależnienia behawioralne",
	            "url": "https://kcpu.gov.pl/",
	            "url_info": "",
	            "phone": [
	                "801-889-880"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Infolinia Towarzystwa Przyjaciół Dzieci",
	            "url": "https://800119119.pl/",
	            "url_info": "",
	            "phone": [
	                "800 119 119"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Antydepresyjny Telefon Zaufania",
	            "url": "https://stopdepresji.pl/",
	            "url_info": "",
	            "phone": [
	                "224848801"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefon Zaufania dla dzieci i młodzieży",
	            "url": "https://panel.116111.pl/",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefon zaufania dla mężczyzn / Helpline for men",
	            "url": "https://www.fundacjaipw.org/mezczyzni",
	            "url_info": "",
	            "phone": [
	                "+48 608 271 402"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Infolinia dla osób starszych",
	            "url": "https://www.malibracia.org.pl/nasze-projekty/telefon-zaufania-dla-osob-starszych/",
	            "url_info": "",
	            "phone": [
	                "22 635 09 54"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Kryzysowy Telefon Zaufania 116 123",
	            "url": "http://www.psychologia.edu.pl/116123.html",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Portugal": [
	        {
	            "name": "Voz de Apoio",
	            "url": "https://vozdeapoio.pt",
	            "url_info": "",
	            "phone": [
	                "225 50 60 70"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Vozes Amigas de Esperança",
	            "url": "https://www.voades.pt/",
	            "url_info": "",
	            "phone": [
	                "222 030 707"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Telefone da Amizade",
	            "url": "http://www.telefone-amizade.pt/site/",
	            "url_info": "",
	            "phone": [
	                "22 832 35 35"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SOS Estudante",
	            "url": "http://sosestudante.pt/",
	            "url_info": "",
	            "phone": [
	                "+351915246060"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Puerto Rico": [
	        {
	            "name": "Línea PAS",
	            "url": "https://lineapas.assmca.pr.gov/",
	            "url_info": "",
	            "phone": [
	                "1 800 981 0023"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea De Orientación Confidencial De La Oficina De La Procuradora De Mujeres",
	            "url": "https://mujer.pr.gov/Pages/default.aspx",
	            "url_info": "",
	            "phone": [
	                "7877222977"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Qatar": [
	        {
	            "name": "Protection and Social Rehabilitation Centre (AMAN Centre)",
	            "url": "http://www.aman.org.qa/En/Pages/Home.aspx",
	            "url_info": "",
	            "phone": [
	                "919"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Romania": [
	        {
	            "name": "DepreHUB",
	            "url": "https://deprehub.ro/",
	            "url_info": "",
	            "phone": [
	                "0374 456 420"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "depreHUB Teen Line",
	            "url": "https://adolescenti.deprehub.ro/",
	            "url_info": "",
	            "phone": [
	                "0374 461 461"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "TelVerde Antisuicid",
	            "url": "https://www.antisuicid.ro/",
	            "url_info": "",
	            "phone": [
	                "0800 801 200"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Russia": [
	        {
	            "name": "Экстренной психологической помощи МЧС России - Emergency Psychological Assistance EMERCOM of Russia",
	            "url": "https://psi.mchs.gov.ru/",
	            "url_info": "",
	            "phone": [
	                "+7(495) 989-50-50"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Телефон доверия Суицид Областная больница № 20",
	            "url": "https://ob20uvat.ru/polezno/422-telefon-doveriya-suitsid.html",
	            "url_info": "",
	            "phone": [
	                "8-800-220-8000"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Moscow Psychological emergency phone",
	            "url": "https://msph.ru/",
	            "url_info": "",
	            "phone": [
	                "051"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Российская ЛГБТ-сеть",
	            "url": "https://lgbtnet.org/helps/",
	            "url_info": "",
	            "phone": [
	                "8-800-555-73-74"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "ТыНеОдна НеГорячаяЛиния помощи (YouAreNotAlone Women's Helpline)",
	            "url": "https://tineodna.ru/#how",
	            "url_info": "",
	            "phone": [
	                "8 800 101 64 79"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "НеГорячаяЛиния",
	            "url": "https://hotlineformen.ru/",
	            "url_info": "",
	            "phone": [
	                "8 800 707 54 65"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "твоятерритория - Your Territory Online",
	            "url": "https://www.xn--b1agja1acmacmce7nj.xn--80asehdb/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Rwanda": [
	        {
	            "name": "8015 Suicide Prevention Hotline",
	            "url": "https://mentalhealth-first.org/",
	            "url_info": "",
	            "phone": [
	                "8015"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Saint Lucia": [
	        {
	            "name": "Saint Lucia National Health Helpline, Mental, Social and Emotional Issues",
	            "url": "http://www.govt.lc/news/national-health-helpline-launched",
	            "url_info": "",
	            "phone": [
	                "203"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Samoa": [
	        {
	            "name": "Faataua Le Ola (Samoa Lifeline)",
	            "url": "https://www.facebook.com/FLOsamoalife/",
	            "url_info": "",
	            "phone": [
	                "800-5433"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Saudi Arabia": [
	        {
	            "name": "National Center for Mental Health Promotion",
	            "url": "https://ncmh.org.sa/",
	            "url_info": "",
	            "phone": [
	                "920033360"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Scotland": [
	        {
	            "name": "Parentline (Scotland)",
	            "url": "https://www.children1st.org.uk",
	            "url_info": "",
	            "phone": [
	                "0800 028 2233"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Scottish Families Affected by Alcohol and Drugs",
	            "url": "https://www.sfad.org.uk/",
	            "url_info": "",
	            "phone": [
	                "0808 0101 011"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Breathing Space Scotland",
	            "url": "https://breathingspace.scot",
	            "url_info": "",
	            "phone": [
	                "(080) 083-8587"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SAMH",
	            "url": "https://www.samh.org.uk",
	            "url_info": "",
	            "phone": [
	                "0344 800 0550"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "LGBT Helpline Scotland",
	            "url": "https://www.lgbthealth.org.uk",
	            "url_info": "",
	            "phone": [
	                "0300 123 2523"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Serbia": [
	        {
	            "name": "Centar \"Srce\"",
	            "url": "https://www.centarsrce.org/index.php#max-widget",
	            "url_info": "",
	            "phone": [
	                "0800-300-303"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Seychelles": [
	        {
	            "name": "Quality of Life Division Helpline - Ministry of Family, Youth and Sport",
	            "url": "https://qld-counselling.sc/",
	            "url_info": "",
	            "phone": [
	                "2722293",
	                "2722293"
	            ],
	            "phone_info": "Text 2722293. Call 2722293."
	        },
	        {
	            "name": "Elderly and Disabled Helpline - Ministry of Family, Youth and Sport",
	            "url": "",
	            "url_info": "",
	            "phone": [
	                "2603030",
	                "2603030"
	            ],
	            "phone_info": "Text 2603030. Call 2603030."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Singapore": [
	        {
	            "name": "Samaritans of Singapore",
	            "url": "https://www.sos.org.sg/",
	            "url_info": "",
	            "phone": [
	                "1767",
	                "9151 1767"
	            ],
	            "phone_info": "Text 9151 1767. Call 1767."
	        },
	        {
	            "name": "ec2.sg",
	            "url": "https://ec2.sg/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Slovakia": [
	        {
	            "name": "Linka dôvery Nezábudka",
	            "url": "https://www.linkanezabudka.sk",
	            "url_info": "",
	            "phone": [
	                "0800 800 566"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Pomoc obetiam násilia",
	            "url": "http://pomocobetiam.sk",
	            "url_info": "",
	            "phone": [
	                "0850 111 321"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Linka detskej istoty",
	            "url": "http://www.ldi.sk/",
	            "url_info": "",
	            "phone": [
	                "116111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "IPčko",
	            "url": "https://ipcko.sk/chatova-poradna/",
	            "url_info": "",
	            "phone": [
	                "0800 500 333"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Slovenia": [
	        {
	            "name": "Zaupni telefon Samarijan",
	            "url": "http://www.telefon-samarijan.si/",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Klic v duševni stiski - A Call In Mental Distress",
	            "url": "https://www.psih-klinika.si/",
	            "url_info": "",
	            "phone": [
	                "(01) 520-99-00"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SOS telefon za ženske in otroke - žrtve nasilja",
	            "url": "https://drustvo-sos.si/",
	            "url_info": "",
	            "phone": [
	                "080 11 55"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "South Africa": [
	        {
	            "name": "Lifeline South Africa",
	            "url": "http://lifelinesa.co.za/",
	            "url_info": "",
	            "phone": [
	                "0861-322-322"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "South African Depression And Anxiety Helpline",
	            "url": "https://www.sadag.org/",
	            "url_info": "",
	            "phone": [
	                "31393",
	                "0800 567 567"
	            ],
	            "phone_info": "Text 31393. Call 0800 567 567."
	        },
	        {
	            "name": "South African Federation For Mental Health Helpline",
	            "url": "https://www.safmh.org/",
	            "url_info": "",
	            "phone": [
	                "011 781 1852"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Akeso Crisis Helpline",
	            "url": "https://www.akeso.co.za/",
	            "url_info": "",
	            "phone": [
	                "0861 435 787"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Stop Gender Violence HelpLine",
	            "url": "https://lifelinesa.co.za/",
	            "url_info": "",
	            "phone": [
	                "0800 150 150"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Love Life",
	            "url": "https://lovelife.org.za/",
	            "url_info": "",
	            "phone": [
	                "0800 121 900"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Spain": [
	        {
	            "name": "Samaritans in Spain",
	            "url": "https://www.samaritansinspain.com/",
	            "url_info": "",
	            "phone": [
	                "900 525 100"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Psikevirtual",
	            "url": "https://www.psikevirtual.com/",
	            "url_info": "",
	            "phone": [
	                "912907177"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Asociación Internacional Teléfono de la Esperanza (ASITES)",
	            "url": "https://telefonodelaesperanza.org/",
	            "url_info": "",
	            "phone": [
	                "717 003 717"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Psicólogos Sin Fronteras España",
	            "url": "https://fundacionpsf.org/",
	            "url_info": "",
	            "phone": [
	                "658 712 646"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Teléfono De La Mujer Galicia",
	            "url": "http://igualdade.xunta.gal/es/content/telefono-de-la-mujer",
	            "url_info": "",
	            "phone": [
	                "900400273"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Fundación ANAR de Ayuda A Niños/as y Adolescentes",
	            "url": "https://www.anar.org",
	            "url_info": "",
	            "phone": [
	                "900202010"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Línea 024",
	            "url": "https://www.sanidad.gob.es/linea024/home.htm",
	            "url_info": "",
	            "phone": [
	                "024"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Teléfono Contra el Suicidio",
	            "url": "https://www.telefonocontraelsuicidio.org/",
	            "url_info": "",
	            "phone": [
	                "911 385 385"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Sri Lanka": [
	        {
	            "name": "සීසීසීලයින් 1333",
	            "url": "https://1333.lk",
	            "url_info": "",
	            "phone": [
	                "1333"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "1926 - National Mental Health Helpline",
	            "url": "https://nimh.health.gov.lk/en/1926-national-mental-health-helpline/",
	            "url_info": "",
	            "phone": [
	                "1926",
	                "1926"
	            ],
	            "phone_info": "Text 1926. Call 1926."
	        },
	        {
	            "name": "Sri Lanka Sumithrayo",
	            "url": "https://srilankasumithrayo.lk",
	            "url_info": "",
	            "phone": [
	                "0707 308 308"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Sudan": [
	        {
	            "name": "9696 Hotline - الخط الساخن 9696",
	            "url": "https://www.facebook.com/FCPA.SD/?fref=ts",
	            "url_info": "",
	            "phone": [
	                "9696"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Sweden": [
	        {
	            "name": "Bris",
	            "url": "https://bris.se/for-barn-och-unga/logga-in/?ReturnUrl=%2ffor-barn-och-unga%2fprata-med-oss%2fchatten%2f",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Lifeline",
	            "url": "http://ringlifeline.nu/",
	            "url_info": "",
	            "phone": [
	                "010 498 10 10"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SOS-telefonen",
	            "url": "https://kyrkanssos.se/hitta-hjalp/sos-telefonen/",
	            "url_info": "",
	            "phone": [
	                "0771-800 650"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Mind Sjalvmordslinjen",
	            "url": "https://mind.se/",
	            "url_info": "",
	            "phone": [
	                "90101"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SPES - suicide Helpline",
	            "url": "https://spes.se/chatt/",
	            "url_info": "",
	            "phone": [
	                "020 -18 18 00"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "The rainbow line",
	            "url": "https://kyrkanssos.se/hitta-hjalp/regnbagslinjen/",
	            "url_info": "",
	            "phone": [
	                "0770-55 00 10"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Shedo",
	            "url": "https://sjalvskadechatten.shedo.se/",
	            "url_info": "",
	            "phone": [
	                "0763949214"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Switzerland": [
	        {
	            "name": "147.ch",
	            "url": "http://www.147.ch/",
	            "url_info": "",
	            "phone": [
	                "147",
	                "147"
	            ],
	            "phone_info": "Text 147. Call 147."
	        },
	        {
	            "name": "Verband Tel 143 - Die Dargebotene Hand",
	            "url": "https://www.143.ch/Beratung/Chat-Kontakt",
	            "url_info": "",
	            "phone": [
	                "143"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Taiwan": [
	        {
	            "name": "国际生命线台湾总会 (International Lifeline Taiwan Association)",
	            "url": "http://www.life1995.org.tw/",
	            "url_info": "",
	            "phone": [
	                "1995"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Tanzania": [
	        {
	            "name": "National Child Helpline Tanzania - 116",
	            "url": "https://www.sematanzania.org/child-helpline",
	            "url_info": "",
	            "phone": [
	                "116"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Thailand": [
	        {
	            "name": "Samaritans Thailand",
	            "url": "https://www.facebook.com/Samaritans.Thailand/",
	            "url_info": "",
	            "phone": [
	                "02-113-6789"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "ปรึกษาปัญหาสุขภาพจิต 1323",
	            "url": "https://www.facebook.com/helpline1323",
	            "url_info": "",
	            "phone": [
	                "1323"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "ศูนย์ช่วยเหลือสังคม สายด่วน 1300 (Social Help Center Hotline 1300)",
	            "url": "https://1300thailand.m-society.go.th/",
	            "url_info": "",
	            "phone": [
	                "1300"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Trinidad and Tobago": [
	        {
	            "name": "Lifeline",
	            "url": "http://lifelinett.com",
	            "url_info": "",
	            "phone": [
	                "800-5588"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Families in Action",
	            "url": "https://www.familiesinaction.net/",
	            "url_info": "",
	            "phone": [
	                "(868) 628-2333"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Childline",
	            "url": "https://childlinett.org/",
	            "url_info": "",
	            "phone": [
	                "800-4321"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "GROOTS Trinidad & Tobago",
	            "url": "https://www.facebook.com/grootstrinidad",
	            "url_info": "",
	            "phone": [
	                "1868 384-4722"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "RN Vincent & Associates",
	            "url": "https://www.facebook.com/globalpropheticministries",
	            "url_info": "",
	            "phone": [
	                "1(868) 486-0708",
	                "1(868) 689-9391"
	            ],
	            "phone_info": "Text 1(868) 689-9391. Call 1(868) 486-0708."
	        },
	        {
	            "name": "Trinidad and Tobago Red Cross Society",
	            "url": "https://www.ttrcs.org/",
	            "url_info": "",
	            "phone": [
	                "1-(868)-627-8215"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Uganda": [
	        {
	            "name": "Mental Health Uganda",
	            "url": "https://mentalhealthuganda.org/",
	            "url_info": "",
	            "phone": [
	                "(0800) 21-21-21"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Ukraine": [
	        {
	            "name": "Національна гаряча лінія з попередження домашнього насильства, торгівлі людьми та гендерної дискримінації",
	            "url": "https://la-strada.org.ua/",
	            "url_info": "",
	            "phone": [
	                "116123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Національна гаряча лінія для дітей та молоді - National Toll-Free Hot Line for Children and Youth",
	            "url": "https://la-strada.org.ua/kontakty",
	            "url_info": "",
	            "phone": [
	                "116 111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Lifeline Ukraine",
	            "url": "https://lifelineukraine.com/",
	            "url_info": "",
	            "phone": [
	                "7333"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "United Arab Emirates": [
	        {
	            "name": "Mental Support Line",
	            "url": "https://hope.hw.gov.ae/",
	            "url_info": "",
	            "phone": [
	                "8004673",
	                "8004673"
	            ],
	            "phone_info": "Text 8004673. Call 8004673."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "United Kingdom": [
	        {
	            "name": "SOS Silence of Suicide",
	            "url": "https://sossilenceofsuicide.org/",
	            "url_info": "",
	            "phone": [
	                "0300 1020 505"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "National Suicide Prevention Helpline UK",
	            "url": "https://www.spuk.org.uk/national-suicide-prevention-helpline-uk/",
	            "url_info": "",
	            "phone": [
	                "0800 689 5652"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "CALM Helpline",
	            "url": "https://www.thecalmzone.net/#open-calmbot",
	            "url_info": "",
	            "phone": [
	                "0800 58 58 58"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SEED Advice Line",
	            "url": "https://seed.charity/",
	            "url_info": "",
	            "phone": [
	                "01482 421525"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Shout",
	            "url": "https://www.giveusashout.org",
	            "url_info": "",
	            "phone": [
	                "85258"
	            ],
	            "phone_info": "Text 85258."
	        },
	        {
	            "name": "Runaway Helpline",
	            "url": "https://www.runawayhelpline.org.uk",
	            "url_info": "",
	            "phone": [
	                "116 000",
	                "116 000"
	            ],
	            "phone_info": "Text 116 000. Call 116 000."
	        },
	        {
	            "name": "The Mix",
	            "url": "https://www.themix.org.uk/get-support/speak-to-our-team",
	            "url_info": "",
	            "phone": [
	                "0808 808 4994"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Childline",
	            "url": "https://www.childline.org.uk/get-support/1-2-1-counsellor-chat/",
	            "url_info": "",
	            "phone": [
	                "0800 1111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "No Panic Youth Helpline",
	            "url": "https://www.nopanic.org.uk",
	            "url_info": "",
	            "phone": [
	                "0330 606 1174"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "LGBT Foundation Helpline",
	            "url": "https://lgbt.foundation",
	            "url_info": "",
	            "phone": [
	                "0345 330 3030"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "OCD Action Helpline",
	            "url": "https://www.ocdaction.org.uk",
	            "url_info": "",
	            "phone": [
	                "0845 390 6232"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Silver Line Helpline",
	            "url": "https://thesilverline.org.uk",
	            "url_info": "",
	            "phone": [
	                "0800 470 8090",
	                "0800 470 8090"
	            ],
	            "phone_info": "Text 0800 470 8090. Call 0800 470 8090."
	        },
	        {
	            "name": "Combat Stress Helpline - Serving Personnel",
	            "url": "https://www.combatstress.org.uk",
	            "url_info": "",
	            "phone": [
	                "0800 323 4444",
	                "075 3740 4719"
	            ],
	            "phone_info": "Text 075 3740 4719. Call 0800 323 4444."
	        },
	        {
	            "name": "Premier Lifeline",
	            "url": "http://www.premierlifeline.org.uk",
	            "url_info": "",
	            "phone": [
	                "0300 111 0101"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Towards Healing (United Kingdom)",
	            "url": "https://towardshealing.ie/",
	            "url_info": "",
	            "phone": [
	                "0800 0963315",
	                "(085) 802-2859"
	            ],
	            "phone_info": "Text (085) 802-2859. Call 0800 0963315."
	        },
	        {
	            "name": "Muslim Youth Helpline",
	            "url": "https://www.myh.org.uk/helpline",
	            "url_info": "",
	            "phone": [
	                "0808 808 2008"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Moodswings Helpline",
	            "url": "https://www.moodswings.org.uk",
	            "url_info": "",
	            "phone": [
	                "0161 832 37 36"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Mermaids Helpline",
	            "url": "https://mermaidsuk.org.uk/contact-us/",
	            "url_info": "",
	            "phone": [
	                "0808 801 0400",
	                "85258"
	            ],
	            "phone_info": "Text 85258. Call 0808 801 0400."
	        },
	        {
	            "name": "Samaritans Helpline",
	            "url": "https://www.samaritans.org/how-we-can-help/contact-samaritan/",
	            "url_info": "",
	            "phone": [
	                "116 123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Samaritans - Welsh Language Line",
	            "url": "https://www.samaritans.org",
	            "url_info": "",
	            "phone": [
	                "0808 164 0123"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "HOPELINEUK",
	            "url": "https://papyrus-uk.org",
	            "url_info": "",
	            "phone": [
	                "0800 068 4141",
	                "078 6003 9967"
	            ],
	            "phone_info": "Text 078 6003 9967. Call 0800 068 4141."
	        },
	        {
	            "name": "Self Injury Support",
	            "url": "https://www.selfinjurysupport.org.uk",
	            "url_info": "",
	            "phone": [
	                "01179279600",
	                "075 3743 2444"
	            ],
	            "phone_info": "Text 075 3743 2444. Call 01179279600."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "United States": [
	        {
	            "name": "Crisis Text Line",
	            "url": "https://connect.crisistextline.org/chat?utm_source=findahelpline",
	            "url_info": "",
	            "phone": [
	                "741741"
	            ],
	            "phone_info": "Text 741741."
	        },
	        {
	            "name": "Disaster Distress Helpline",
	            "url": "https://www.samhsa.gov/find-help/disaster-distress-helpline",
	            "url_info": "",
	            "phone": [
	                "(800) 846-8517",
	                "800-985-5990",
	                "800-985-5990"
	            ],
	            "phone_info": "Text 800-985-5990. Call 800-985-5990."
	        },
	        {
	            "name": "SAMHSA's National Helpline",
	            "url": "https://www.samhsa.gov/find-help/national-helpline",
	            "url_info": "",
	            "phone": [
	                "1-800-487-4889",
	                "1-800-662-4357",
	                "435748"
	            ],
	            "phone_info": "Text 435748. Call 1-800-662-4357."
	        },
	        {
	            "name": "National Alliance on Mental Illness (NAMI) HelpLine",
	            "url": "https://www.nami.org/help",
	            "url_info": "",
	            "phone": [
	                "(800) 950-6264",
	                "62640"
	            ],
	            "phone_info": "Text 62640. Call (800) 950-6264."
	        },
	        {
	            "name": "Games and Online Harassment Hotline",
	            "url": "https://gameshotline.org/",
	            "url_info": "",
	            "phone": [
	                "23368"
	            ],
	            "phone_info": "Text 23368."
	        },
	        {
	            "name": "National Sexual Assault Hotline",
	            "url": "https://hotline.rainn.org/online?_ga=2.62712236.1802482658.1636925549-1192871957.1636412235",
	            "url_info": "",
	            "phone": [
	                "(800) 656-4673"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Su Familia",
	            "url": "https://www.healthyamericas.org/help-line",
	            "url_info": "",
	            "phone": [
	                "1-866-783-2645"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "SAGE National LGBTQ+ Elder Hotline",
	            "url": "https://www.sageusa.org/what-we-do/sage-national-lgbt-elder-hotline/",
	            "url_info": "",
	            "phone": [
	                "(877) 360-5428"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "LGBT National Coming Out Support Hotline",
	            "url": "https://www.lgbtcomingout.org/",
	            "url_info": "",
	            "phone": [
	                "888-688-5428"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "TXT 4 HELP",
	            "url": "https://www.nationalsafeplace.org/txt-4-help",
	            "url_info": "",
	            "phone": [
	                "44357"
	            ],
	            "phone_info": "Text 44357."
	        },
	        {
	            "name": "National Grad Crisis Line",
	            "url": "https://gradresources.org/",
	            "url_info": "",
	            "phone": [
	                "(877) 472-3457"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Physician Support Line",
	            "url": "https://www.physiciansupportline.com/",
	            "url_info": "",
	            "phone": [
	                "(888) 409-0141"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "LGBT National Senior Helpline",
	            "url": "https://www.lgbthotline.org/senior-hotline",
	            "url_info": "",
	            "phone": [
	                "(888) 234-7243"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Teen Line",
	            "url": "https://teenlineonline.org/",
	            "url_info": "",
	            "phone": [
	                "839863",
	                "(800) 852-8336"
	            ],
	            "phone_info": "Text 839863. Call (800) 852-8336."
	        },
	        {
	            "name": "LGBT National Hotline",
	            "url": "https://www.lgbthotline.org/",
	            "url_info": "",
	            "phone": [
	                "(888) 843-4564"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Centerstone Military Services",
	            "url": "https://centerstone.org/",
	            "url_info": "",
	            "phone": [
	                "(866) 781-8010"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Marine Corps DSTRESS Line",
	            "url": "http://livechat.boldchat.com/aid/584698901246322288/bc.chat?resize=true&cbdid=375813091207300441&url=http%3A//www.usmc-mccs.org/",
	            "url_info": "",
	            "phone": [
	                "(877) 476-7734"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Vets4Warriors",
	            "url": "https://www.vets4warriors.com/",
	            "url_info": "",
	            "phone": [
	                "(855) 838-8255"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Veterans Crisis Line",
	            "url": "https://www.veteranscrisisline.net/",
	            "url_info": "",
	            "phone": [
	                "838255",
	                "988"
	            ],
	            "phone_info": "Text 838255. Call 988."
	        },
	        {
	            "name": "Military Helpline",
	            "url": "http://militaryhelpline.org/",
	            "url_info": "",
	            "phone": [
	                "839863",
	                "(888) 457-4838"
	            ],
	            "phone_info": "Text 839863. Call (888) 457-4838."
	        },
	        {
	            "name": "TheHopeLine",
	            "url": "https://www.thehopeline.com/chat-live/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        },
	        {
	            "name": "Amala Muslim Youth Helpline",
	            "url": "https://amala.mas-ssf.org/",
	            "url_info": "",
	            "phone": [
	                "855-95"
	            ],
	            "phone_info": "Text 855-95."
	        },
	        {
	            "name": "Hey Sam",
	            "url": "https://samaritanshope.org/heysam",
	            "url_info": "",
	            "phone": [
	                "439-726"
	            ],
	            "phone_info": "Text 439-726."
	        },
	        {
	            "name": "LGBT National Youth Talkline",
	            "url": "https://www.lgbthotline.org/youth-talkline",
	            "url_info": "",
	            "phone": [
	                "(800) 246-7743"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Boys Town National Hotline",
	            "url": "https://www.yourlifeyourvoice.org/",
	            "url_info": "",
	            "phone": [
	                "20121",
	                "(800) 448-3000"
	            ],
	            "phone_info": "Text 20121. Call (800) 448-3000."
	        },
	        {
	            "name": "Postpartum Support International",
	            "url": "https://www.postpartum.net/",
	            "url_info": "",
	            "phone": [
	                "(800) 944-4773",
	                "(800) 944-4773"
	            ],
	            "phone_info": "Text (800) 944-4773. Call (800) 944-4773."
	        },
	        {
	            "name": "988 Suicide & Crisis Lifeline",
	            "url": "https://988lifeline.org/chat/",
	            "url_info": "",
	            "phone": [
	                "988",
	                "988"
	            ],
	            "phone_info": "Text 988. Call 988."
	        },
	        {
	            "name": "TrevorLifeline",
	            "url": "https://www.TheTrevorProject.org",
	            "url_info": "",
	            "phone": [
	                "678678",
	                "(866) 488-7386"
	            ],
	            "phone_info": "Text 678678. Call (866) 488-7386."
	        },
	        {
	            "name": "StrongHearts Native Helpline",
	            "url": "https://strongheartshelpline.org/",
	            "url_info": "",
	            "phone": [
	                "(844) 762-8483",
	                "(844) 762-8483"
	            ],
	            "phone_info": "Text (844) 762-8483. Call (844) 762-8483."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Uruguay": [
	        {
	            "name": "Línea Nacional de Prevención del Suicidio",
	            "url": "https://www.gub.uy/ministerio-salud-publica/comunicacion/noticias/linea-de-prevencion-del-suicidio-0800-0767#:~:text=La%20l%C3%ADnea%20es%20un%20servicio,los%20suicidios%20a%20nivel%20pa%C3%ADs.",
	            "url_info": "",
	            "phone": [
	                "0800 0767"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Venezuela": [
	        {
	            "name": "Línea de Ayuda Psicológica (LAPSI) / Federación de Psicólogos de Venezuela",
	            "url": "http://www.fpv.org.ve/",
	            "url_info": "",
	            "phone": [
	                "02124163116"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Vietnam": [
	        {
	            "name": "Tâm lý NQH",
	            "url": "https://tamlynqh.vn/",
	            "url_info": "",
	            "phone": [
	                "19006186"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "Ngày mai",
	            "url": "https://duongdaynongngaymai.vn/",
	            "url_info": "",
	            "phone": [
	                "963061414"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "National Child Helpline",
	            "url": "http://tongdai111.vn",
	            "url_info": "",
	            "phone": [
	                "111"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Wales": [
	        {
	            "name": "C.A.L.L. Helpline",
	            "url": "http://www.callhelpline.org.uk",
	            "url_info": "",
	            "phone": [
	                "(080) 013-2737",
	                "81066"
	            ],
	            "phone_info": "Text 81066. Call (080) 013-2737."
	        },
	        {
	            "name": "LGBT+ Cymru Helpline",
	            "url": "https://www.lgbtcymru.org.uk",
	            "url_info": "",
	            "phone": [
	                "0800 917 9996"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "MEIC",
	            "url": "https://www.meiccymru.org",
	            "url_info": "",
	            "phone": [
	                "84001",
	                "0808 802 3456"
	            ],
	            "phone_info": "Text 84001. Call 0808 802 3456."
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},
	{
	    "Yemen": [
	        {
	            "name": "Family Counseling & Development Foundation Yemen",
	            "url": "http://www.fcdf-ye.org/Default.aspx",
	            "url_info": "",
	            "phone": [
	                "136"
	            ],
	            "phone_info": ""
	        },
	        {
	            "name": "7 Cups",
	            "url": "https://www.7cups.com/",
	            "url_info": "",
	            "phone": [],
	            "phone_info": ""
	        }
	    ]
	},

];

// Merge arrays
for (const formattedCountry of formatted) {
    const formattedCountryName = Object.keys(formattedCountry)[0];
    const mainCountryIndex = main.findIndex((country) => Object.keys(country)[0] === formattedCountryName);
  
    if (mainCountryIndex !== -1) {
      const mainCountry = main[mainCountryIndex];
      const mainResources = mainCountry[formattedCountryName];
      const formattedResources = formattedCountry[formattedCountryName];
  
      for (const formattedResource of formattedResources) {
        const mainResourceNames = mainResources.map((resource) => resource.name);
        const isDuplicate =
          mainResourceNames.includes(formattedResource.name) ||
          mainResourceNames.some((name) => formattedResource.name.startsWith(name));
  
        if (!isDuplicate) {
          mainResources.push(formattedResource);
        }
      }
  
      // Move "7 Cups" to the last position
      const cupsIndex = mainResources.findIndex((resource) => resource.name === '7 Cups');
      if (cupsIndex !== -1) {
        const cupsResource = mainResources.splice(cupsIndex, 1);
        mainResources.push(cupsResource[0]);
      }
    } else {
      // Country exists in formatted but not in main, add it to main
      main.push(formattedCountry);
    }
  }

// Sort countries by country names
main.sort((countryA, countryB) => {
	const countryNameA = Object.keys(countryA)[0].toUpperCase();
	const countryNameB = Object.keys(countryB)[0].toUpperCase();
	if (countryNameA < countryNameB) {
	  return -1;
	}
	if (countryNameA > countryNameB) {
	  return 1;
	}
	return 0; // names must be equal
  });
  
  // Write merged array to file
  const outputFilePath = path.join(__dirname, 'data.js');
  const outputData = `window.data = ${JSON.stringify(main, null, 4)};`;
  
  fs.writeFileSync(outputFilePath, outputData, 'utf-8');
  
  console.log('Arrays merged successfully!');