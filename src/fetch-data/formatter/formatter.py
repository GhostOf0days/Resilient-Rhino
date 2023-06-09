import json
import os

def format_json_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    formatted_data = []
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

    for country in data:
        codes_to_countries = {v: k for k, v in countries.items()}
        if country in codes_to_countries:
            country_name = codes_to_countries[country]
        else:
            continue

        country_data = {country_name: []}

        for item in data[country]:
            new_item = {}
            new_item['name'] = item['name']
            new_item['url'] = ''
            new_item['url_info'] = ''
            new_item['phone'] = []
            new_item['phone_info'] = ''

            call = False
            text = False
            text_numbers = []

            for link in item['links']:
                if link.startswith('tel:') or link.startswith('sms:'):
                    if link.startswith('tel:'):
                        call = True
                        call_number = link.replace('tel:','').strip()
                    if link.startswith('sms:'):
                        text = True
                        text_numbers.append(link.replace('sms:','').strip())
                    new_item['phone'].append(link[4:])
                else:
                    new_item['url'] = link
            for number in text_numbers:
                if (len(new_item['phone_info']) > 0):
                    new_item['phone_info'] += (' ')
                new_item['phone_info'] += (f"Text {number}.")
            if (call) and (text):
                if (len(new_item['phone_info']) > 0):
                    new_item['phone_info'] += (' ')
                new_item['phone_info'] += (f"Call {call_number}.")
            
            country_data[country_name].append(new_item)

        # add 7 Cups resource
        country_data[country_name].append({
            "name": "7 Cups",
            "url": "https://www.7cups.com/",
            "url_info": "",
            "phone": [],
            "phone_info": ""
        })

        formatted_data.append(country_data)

    with open(output_file, 'w', encoding='utf-8') as outfile:
        outfile.write('window.formatted = [\n')
        for i, country_data in enumerate(formatted_data):
            indented_data = json.dumps(country_data, ensure_ascii=False, indent=4).replace('\n', '\n\t')
            indented_data = indented_data.replace('{', '\t{', 1)
            outfile.write(indented_data)
            outfile.write(',\n')
        outfile.write('\n];')

# Get the directory of the current script
current_dir = os.path.dirname(os.path.realpath(__file__))

# Define the relative paths to the input and output files
input_file = os.path.join(current_dir, '..', 'scraper', 'scraped.json')
output_file = os.path.join(current_dir, 'formatted.js')

format_json_file(input_file, output_file)