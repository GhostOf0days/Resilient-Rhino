from bs4 import BeautifulSoup
import json
import random
import requests

topics = ['depression','suicidal-thoughts','self-harm']
countries = {
    'Afghanistan': 'af',
    'Albania': 'al',
    'Algeria': 'dz',
    'Andorra': 'ad',
    'Angola': 'ao',
    'Antarctica': 'aq',
    'Antigua and Barbuda': 'ag',
    'Argentina': 'ar',
    'Armenia': 'am',
    'Australia': 'au',
    'Austria': 'at',
    'Azerbaijan': 'az',
    'Åland Islands': 'ax',
    'Bahamas': 'bs',
    'Bahrain': 'bh',
    'Bangladesh': 'bd',
    'Barbados': 'bb',
    'Basque Country': 'es-pv',
    'Belarus': 'by',
    'Belgium': 'be',
    'Belize': 'bz',
    'Benin': 'bj',
    'Bhutan': 'bt',
    'Bolivia': 'bo',
    'Bosnia and Herzegovina': 'ba',
    'Botswana': 'bw',
    'Brazil': 'br',
    'British Indian Ocean Territory': 'io',
    'British Virgin Islands': 'vg',
    'Brunei': 'bn',
    'Bulgaria': 'bg',
    'Burkina Faso': 'bf',
    'Burundi': 'bi',
    'Cabo Verde': 'cv',
    'Cambodia': 'kh',
    'Cameroon': 'cm',
    'Canada': 'ca',
    'Canary Islands': 'ic',
    'Caribbean Netherlands': 'bq',
    'Catalonia': 'es-ct',
    'Central African Republic': 'cf',
    'Central European Free Trade Agreement': 'cefta',
    'Ceuta & Melilla': 'ea',
    'Chad': 'td',
    'Chile': 'cl',
    'China': 'cn',
    'Colombia': 'co',
    'Comoros': 'km',
    'Congo (Democratic Republic)': 'cd',
    'Congo (Republic)': 'cg',
    'Costa Rica': 'cr',
    'Côte d\'Ivoire': 'ci',
    'Croatia': 'hr',
    'Cuba': 'cu',
    'Curaçao': 'cw',
    'Cyprus': 'cy',
    'Czech Republic': 'cz',
    'Denmark': 'dk',
    'Diego Garcia': 'dg',
    'Djibouti': 'dj',
    'Dominica': 'dm',
    'Dominican Republic': 'do',
    'East Timor': 'tl',
    'Ecuador': 'ec',
    'Egypt': 'eg',
    'El Salvador': 'sv',
    'England': 'gb-eng',
    'Equatorial Guinea': 'gq',
    'Eritrea': 'er',
    'Estonia': 'ee',
    'Eswatini': 'sz',
    'Ethiopia': 'et',
    'Fiji': 'fj',
    'Finland': 'fi',
    'France': 'fr',
    'French Guiana': 'gf',
    'French Southern Territories': 'tf',
    'Gabon': 'ga',
    'Galicia': 'es-ga',
    'Gambia': 'gm',
    'Georgia': 'ge',
    'Germany': 'de',
    'Ghana': 'gh',
    'Gibraltar': 'gi',
    'Greece': 'gr',
    'Greenland': 'gl',
    'Grenada': 'gd',
    'Guadeloupe': 'gp',
    'Guatemala': 'gt',
    'Guernsey': 'gg',
    'Guinea': 'gn',
    'Guinea-Bissau': 'gw',
    'Guyana': 'gy',
    'Haiti': 'ht',
    'Heard & McDonald Islands': 'hm',
    'Honduras': 'hn',
    'Hong Kong': 'hk',
    'Hungary': 'hu',
    'Iceland': 'is',
    'India': 'in',
    'Indonesia': 'id',
    'Iran': 'ir',
    'Iraq': 'iq',
    'Ireland': 'ie',
    'Isle of Man': 'im',
    'Israel': 'il',
    'Italy': 'it',
    'Jamaica': 'jm',
    'Japan': 'jp',
    'Jersey': 'je',
    'Jordan': 'jo',
    'Kazakhstan': 'kz',
    'Kenya': 'ke',
    'Kiribati': 'ki',
    'Korea (North)': 'kp',
    'Korea (South)': 'kr',
    'Kosovo': 'xk',
    'Kuwait': 'kw',
    'Kyrgyzstan': 'kg',
    'Laos': 'la',
    'Latvia': 'lv',
    'Lebanon': 'lb',
    'Lesotho': 'ls',
    'Liberia': 'lr',
    'Libya': 'ly',
    'Liechtenstein': 'li',
    'Lithuania': 'lt',
    'Luxembourg': 'lu',
    'Madagascar': 'mg',
    'Malawi': 'mw',
    'Malaysia': 'my',
    'Maldives': 'mv',
    'Mali': 'ml',
    'Malta': 'mt',
    'Marshall Islands': 'mh',
    'Mauritania': 'mr',
    'Mauritius': 'mu',
    'Mayotte': 'yt',
    'Mexico': 'mx',
    'Micronesia': 'fm',
    'Moldova': 'md',
    'Monaco': 'mc',
    'Mongolia': 'mn',
    'Montenegro': 'me',
    'Morocco': 'ma',
    'Mozambique': 'mz',
    'Myanmar': 'mm',
    'Namibia': 'na',
    'Nauru': 'nr',
    'Nepal': 'np',
    'Netherlands': 'nl',
    'New Zealand': 'nz',
    'Nicaragua': 'ni',
    'Niger': 'ne',
    'Nigeria': 'ng',
    'North Korea': 'kp',
    'North Macedonia': 'mk',
    'Northern Ireland': 'gb-nir',
    'Norway': 'no',
    'Oman': 'om',
    'Pakistan': 'pk',
    'Palau': 'pw',
    'Palestine': 'ps',
    'Panama': 'pa',
    'Papua New Guinea': 'pg',
    'Paraguay': 'py',
    'Peru': 'pe',
    'Philippines': 'ph',
    'Poland': 'pl',
    'Portugal': 'pt',
    'Puerto Rico': 'pr',
    'Qatar': 'qa',
    'Romania': 'ro',
    'Russia': 'ru',
    'Rwanda': 'rw',
    'Réunion': 're',
    'Saint Barthélemy': 'bl',
    'Saint Kitts and Nevis': 'kn',
    'Saint Lucia': 'lc',
    'Saint Martin': 'mf',
    'Saint Pierre & Miquelon': 'pm',
    'Saint Vincent and the Grenadines': 'vc',
    'Samoa': 'ws',
    'San Marino': 'sm',
    'Sao Tome and Principe': 'st',
    'Saudi Arabia': 'sa',
    'Scotland': 'gb-sct',
    'Senegal': 'sn',
    'Serbia': 'rs',
    'Seychelles': 'sc',
    'Sierra Leone': 'sl',
    'Singapore': 'sg',
    'Sint Maarten': 'sx',
    'Slovakia': 'sk',
    'Slovenia': 'si',
    'Solomon Islands': 'sb',
    'Somalia': 'so',
    'South Africa': 'za',
    'South Korea': 'kr',
    'South Sudan': 'ss',
    'Spain': 'es',
    'Sri Lanka': 'lk',
    'Sudan': 'sd',
    'Suriname': 'sr',
    'Sweden': 'se',
    'Svalbard & Jan Mayen': 'sj',
    'Switzerland': 'ch',
    'Syria': 'sy',
    'Taiwan': 'tw',
    'Tajikistan': 'tj',
    'Tanzania': 'tz',
    'Thailand': 'th',
    'Timor-Leste': 'tl',
    'Togo': 'tg',
    'Tonga': 'to',
    'Trinidad and Tobago': 'tt',
    'Tunisia': 'tn',
    'Turkey': 'tr',
    'Turkmenistan': 'tm',
    'Tuvalu': 'tv',
    'Uganda': 'ug',
    'Ukraine': 'ua',
    'United Arab Emirates': 'ae',
    'United Kingdom': 'gb',
    'United States': 'us',
    'United Nations': 'un',
    'Unknown or Invalid Region': 'xx',
    'Uruguay': 'uy',
    'Uzbekistan': 'uz',
    'U.S. Outlying Islands': 'um',
    'U.S. Virgin Islands': 'vi',
    'Vanuatu': 'vu',
    'Vatican City': 'va',
    'Venezuela': 've',
    'Vietnam': 'vn',
    'Wales': 'gb-wls',
    'Wallis & Futuna': 'wf',
    'Yemen': 'ye',
    'Zambia': 'zm',
    'Zimbabwe': 'zw'
}

def make_url(country,topic):
    return f'https://findahelpline.com/{country}/topics/{topic}'

def parse_page(url):

    req = requests.get(url)
    if not req.ok:
        return []
    page = BeautifulSoup(req.text,'html.parser')
    # all helpline items have MuiBox-root class
    items = page.find_all('div',{'class':'MuiBox-root'})

    # convenience to find child
    def getchild(item, *indexes):
        for index in indexes:
            item = list(item.children)[index]
        return item

    def debugout(s):
        if 0:
            print('debug:',s)

    # determine if the item has the <h6> tag at the right place
    # maybe not a reliable way to find helpline items but web scraping is annoying
    def parse(item):
        try:
            c1 = list(item.children)
            infobox = c1[0]
            links = c1[2]
            assert getchild(infobox,0,0).name == 'h6'
            ret = {}
            ret['name'] = getchild(infobox,0,0).text
            print('\033[1;93m'+ret['name']+'\033[0m ... ',end='')
            try:
                #print(item.prettify())
                ret['tags'] = []
                tagbox = getchild(infobox,1,0)
                #debugout('found tagbox')
                for tagitem in tagbox.children:
                    ret['tags'].append(tagitem.text)
                #debugout('extracted tags')
                try:
                    ret['desc'] = getchild(infobox,2,0).text.strip()
                except:
                    ret['desc'] = ''
                #debugout('extracted desc')
                start_index = 3 if ret['desc'] == '' else 4
                #debugout(f'start_index = {start_index}')
                #print(ret['desc'])
                ret['links'] = set()
                for infoitem in list(infobox.children)[start_index:]:
                    for infoitemlink in infoitem.find_all('a'):
                        ret['links'].add(infoitemlink['href'])
                for link in links.children:
                    for linka in link.find_all('a'):
                        ret['links'].add(linka['href'])
                ret['links'] = list(ret['links'])
                print('\033[1;92msuccess\033[0m')
                return ret
            except Exception as e:
                print('e',e)
                print('\033[1;91mfailure\033[0m')
        except Exception as e:
            return None

    output = []

    for item in items:
        result = parse(item)
        if result is not None:
            output.append((item,result))

    return [result for item,result in output]

output = {}

i = 0
countrycodes = list(countries.keys())
random.shuffle(countrycodes)
for country in countrycodes:
    i += 1
    print(f'\033[1;96m{country}\033[0m (\033[1;93m{i} / {len(countries)}\033[0m)')
    countrycode = countries[country]
    countrydata = []
    for topic in topics:
        print(f'\033[1;96m{country}\033[0m (\033[1;91m{countrycode}\033[0m) '
              f'\033[1;95m{topic}\033[0m')
        pagedata = parse_page(make_url(countrycode,topic))
        for data in pagedata:
            if data not in countrydata:
                countrydata.append(data)
    print(f'\033[1;96m{country} \033[1;94mparsed {len(countrydata)} items\033[0m')
    print()
    if len(countrydata) > 0:
        output[countrycode] = countrydata

with open('scraped.json','w') as f:
    f.write(json.dumps(output,indent=4))