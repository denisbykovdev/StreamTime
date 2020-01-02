import React from "react";
import { Svg, G, Path, Rect } from "react-native-svg";
import Colors from "../constants/Colors";
import { View } from "react-native";
import Layout from "../constants/Layout";

const AddCompIcon = props => (
  <View
    style={{
      width: Layout.window.width * 0.1,
      height: Layout.window.width * 0.1
    }}
  >
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <G
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="add">
          <G id="add-(1)">
            <Path
              d="M12.0018753,7.77156117e-16 L11.3020159,7.77156117e-16 L11.289639,7.77156117e-16 L11.2067511,7.77156117e-16 L11.1939991,7.77156117e-16 L11.180872,7.77156117e-16 L11.167745,7.77156117e-16 L11.1594937,7.77156117e-16 L11.1534927,7.77156117e-16 L11.1452414,7.77156117e-16 L11.1392405,7.77156117e-16 L11.1309892,7.77156117e-16 L11.1257384,7.77156117e-16 L11.116737,7.77156117e-16 L11.1028598,7.77156117e-16 L11.0893577,7.77156117e-16 L11.0758556,7.77156117e-16 L11.0619784,7.77156117e-16 L11.0481013,7.77156117e-16 L11.0105954,0.003 L10.9963432,0.003 L10.982466,0.003 L10.9682138,0.003 C10.6899203,0.028125 10.4150023,0.061125 10.1430849,0.10275 L10.258978,0.84375 C10.8365682,0.768 11.4194093,0.7365 12.0018753,0.75 L12.0018753,7.77156117e-16 Z M8.31129864,0.577875 C7.71608064,0.7695 7.13699015,1.008 6.57927801,1.290375 L6.91683075,1.959375 C7.43966245,1.69425 7.98237225,1.47075 8.54008439,1.290375 L8.30979841,0.577875 L8.31129864,0.577875 Z M5.42859822,2 C4.92151899,2.36675 4.44406939,2.7725 4,3.2135 L4.52808251,3.746 C4.94477262,3.333125 5.39259259,2.95325 5.86779184,2.60975 L5.42859822,2.001875 C5.42859822,2.001875 5.42859822,2 5.42859822,2 Z M2.4068946,5.07626517 C1.97120451,5.5254968 1.57146619,6.0079908 1.21072206,6.51940286 L1.82324947,6.95211242 C2.16191413,6.47315244 2.53696611,6.02128547 2.94529786,5.60048653 L2.40722019,5.07811169 C2.40722019,5.07811169 2.4068946,5.07626517 2.4068946,5.07626517 Z M0.63662554,8.27018516 C0.390864018,8.84571638 0.190586531,9.43941673 0.0370765649,10.0461402 L0.763989402,10.2305991 C0.908516192,9.66208492 1.09672274,9.10582416 1.32713242,8.56664148 L0.637591236,8.27179235 C0.637591236,8.27179235 0.63662554,8.27018516 0.63662554,8.27018516 Z M0,11.898 L0,11.910375 L0,11.965125 L0,12 L0,12.076875 L0,12.72375 L0,12.736125 L0,12.780375 L0,12.7875 L0,12.799875 L0,12.84975 L0,12.862125 L0,12.8745 L0,12.8955 L0,12.903 L0,12.90975 L0,12.917625 L0,12.923625 L0,12.935625 L0,12.942 L0,12.949875 L0,12.9855 L0,12.9975 L0,13.00425 L0,13.011375 L0,13.095 L0,13.101375 L0,13.263375 L0,13.269 L0,13.27725 L0,13.282875 L0,13.291125 L0,13.296375 L0,13.301625 L0,13.3125 L0,13.318125 L0,13.326375 L0,13.332 L0,13.339875 L0,13.345875 L0,13.351125 L0,13.3575 L0,13.3635 L0,13.37625 L0,13.38225 L0,13.388625 L0,13.394625 L0,13.40775 L0,13.420875 L0,13.434 C0.0131270511,13.543125 0.027379278,13.6515 0.0435067979,13.7595 L0.785747773,13.65 C0.733989686,13.10175 0.721987811,12.550125 0.750117206,12 L0.750117206,11.904375 L0,11.898 Z M1.26244726,15.368625 L0.546835443,15.593625 C0.576465073,15.687375 0.60684482,15.78075 0.638349742,15.87375 L0.657477731,15.92925 C0.673605251,15.975375 0.689732771,16.0215 0.706235349,16.067625 C0.861509611,16.498875 1.04153774,16.92075 1.24556962,17.331 L1.91729958,16.99725 C1.65663385,16.472625 1.43759962,15.928125 1.26244726,15.368625 Z M2.81931552,18.504 L2.20834505,18.9375 C2.56877637,19.44525 2.96821378,19.9245 3.4029067,20.37075 L3.40778247,20.376 L3.94486639,19.851 C3.53530239,19.430625 3.15911861,18.9795 2.81969058,18.501 L2.81931552,18.504 Z M5.26507267,21.012 L4.81500234,21.612 C5.19268636,21.89475 5.58687295,22.155 5.99531177,22.391625 L6.01481481,22.402875 L6.02606657,22.40925 L6.03281763,22.413 L6.04369433,22.419375 L6.05044538,22.423125 L6.05419597,22.425 L6.06057196,22.428375 L6.06619784,22.43175 L6.06957337,22.43175 L6.07482419,22.43475 L6.07819972,22.43475 L6.08082513,22.43475 L6.08532583,22.437375 L6.08757618,22.437375 L6.09245195,22.44 L6.0947023,22.44 L6.09770277,22.44 L6.09995312,22.44 L6.10445382,22.442625 L6.10707923,22.442625 L6.10970464,22.442625 L6.11420534,22.44525 L6.11683075,22.44525 L6.11983122,22.44525 L6.12358181,22.447125 L6.12658228,22.447125 L6.12920769,22.447125 L6.13370839,22.44975 L6.13595874,22.44975 L6.13933427,22.44975 L6.14158462,22.44975 L6.14646038,22.452375 L6.14871074,22.452375 L6.15246132,22.454625 L6.15546179,22.454625 L6.15883732,22.4565 L6.16108767,22.4565 L6.16596343,22.459125 L6.16821378,22.459125 L6.17196437,22.461 L6.17458978,22.461 L6.17871542,22.46325 L6.18134083,22.46325 L6.18584154,22.465875 L6.18771683,22.465875 L6.19146742,22.468125 L6.19634318,22.47075 L6.20121894,22.473375 L6.20571964,22.476 L6.21097046,22.479 L6.21547117,22.481625 L6.22072199,22.484625 L6.22597281,22.487625 L6.23084857,22.49025 L6.23647445,22.49325 L6.24210033,22.49625 L6.24810127,22.499625 L6.25447726,22.503 L6.2604782,22.506375 L6.26647914,22.50975 L6.27248008,22.513125 L6.27848101,22.5165 L6.28448195,22.519875 L6.29685888,22.526625 L6.30285982,22.53 L6.30923582,22.533375 L6.31561181,22.53675 L6.32798875,22.5435 L6.33436474,22.546875 L6.34711674,22.553625 L6.36624473,22.56375 L6.75105485,21.95175 C6.23272386,21.677625 5.73689639,21.363375 5.26732302,21.012 L5.26507267,21.012 Z M8.36080638,22.65 L8.11814346,23.359875 C8.5862166,23.519625 9.06404126,23.6505 9.54824191,23.751 L9.56249414,23.754 L9.57674637,23.757 L9.58387248,23.757 L9.59737459,23.759625 L9.61050164,23.76225 L9.61687764,23.76225 L9.62287857,23.76225 L9.62925457,23.76225 L9.63525551,23.76225 L9.6416315,23.76225 L9.6480075,23.76225 L9.65325832,23.76225 L9.65925926,23.76225 L9.66113455,23.76225 L9.66601031,23.76225 L9.67163619,23.76225 L9.67388654,23.76225 L9.67876231,23.76225 L9.68101266,23.76225 L9.68551336,23.76225 L9.68813877,23.76225 L9.69338959,23.76225 L9.69563994,23.76225 L9.69939053,23.76225 L9.71401782,23.76225 L9.71926864,23.76225 L9.72189405,23.76225 L9.72564463,23.76225 L9.72902016,23.76225 L9.73352086,23.76225 L9.73614627,23.76225 L9.73989686,23.76225 L9.74439756,23.76225 L9.74777309,23.76225 L9.75077356,23.76225 L9.75452414,23.76225 L9.75864979,23.76225 L9.7612752,23.76225 L9.76502579,23.76225 L9.76915143,23.76225 L9.77290202,23.76225 L9.77515237,23.76225 L9.78152836,23.76225 L9.78565401,23.76225 L9.79278012,23.76225 L9.80553211,23.7645 L9.81865917,23.76675 L9.82766057,23.76675 L9.84153774,23.769375 L9.92517581,23.784 L10.0534459,23.04525 C9.47998125,22.9575 8.91401782,22.8255 8.36080638,22.65 Z M13.5654946,23.14425 C13.0471636,23.2155 12.524707,23.25075 12.0018753,23.25 C11.9381153,23.25 11.8743554,23.25 11.8105954,23.25 L11.7982185,24 L11.8428504,24 L12.7519925,24 L12.7639944,24 L12.7711205,24 L12.7834974,24 L12.8041256,24 L12.8161275,24 L12.8236287,24 L12.8356306,24 L12.8427567,24 L12.8551336,24 L12.8753868,24 L12.8877637,24 L12.8945148,24 L12.9068917,24 L12.9260197,24 L12.9451477,24 L12.9774027,23.997375 L12.9969058,23.997375 C13.2219409,23.979 13.4451008,23.953875 13.6663854,23.922375 L13.5632443,23.1795 L13.5654946,23.14425 Z M16.915143,22.125 C16.3881857,22.381125 15.8417253,22.59525 15.2810127,22.765875 L15.4992968,23.483625 L15.5015471,23.483625 L15.5101735,23.481 L15.5450539,23.470125 C15.7682138,23.401125 15.9887482,23.326125 16.2062822,23.245125 L16.2190342,23.24025 L16.2317862,23.235375 L16.2396624,23.232375 L16.2520394,23.227875 L16.2595406,23.224875 L16.2632911,23.224875 L16.2704173,23.22225 L16.2824191,23.21775 L16.2891702,23.215125 L16.2929208,23.215125 L16.2992968,23.2125 L16.3109236,23.208 L16.3172996,23.205375 L16.3210502,23.205375 L16.3233005,23.205375 L16.3289264,23.203125 L16.3311767,23.203125 L16.3345523,23.203125 L16.3371777,23.203125 L16.3420534,23.20125 L16.3443038,23.20125 L16.3495546,23.199375 L16.35218,23.199375 L16.3551805,23.199375 L16.358181,23.199375 L16.3626817,23.199375 L16.3653071,23.199375 L16.3683075,23.199375 L16.3728083,23.199375 L16.3758087,23.199375 L16.3784341,23.199375 L16.3818097,23.199375 L16.3859353,23.199375 L16.3885607,23.199375 L16.3926864,23.199375 L16.3956868,23.199375 L16.3994374,23.199375 L16.4020628,23.199375 L16.4069386,23.1975 L16.4091889,23.1975 L16.4129395,23.1975 L16.4151899,23.1975 L16.4200656,23.195625 L16.422316,23.195625 L16.4268167,23.195625 L16.4294421,23.195625 L16.4335677,23.195625 L16.4358181,23.195625 L16.4410689,23.193375 L16.4429442,23.193375 L16.4474449,23.193375 L16.4526957,23.191125 L16.454571,23.191125 L16.4601969,23.188875 L16.4650727,23.187 L16.466948,23.187 L16.4721988,23.18475 L16.4766995,23.18475 L16.5025785,23.128125 L16.5082044,23.125875 L16.5134552,23.123625 L16.5190811,23.121375 L16.524707,23.119125 L16.5307079,23.1165 L16.5367089,23.113875 L16.5427098,23.11125 L16.5487107,23.108625 L16.5543366,23.106375 L16.5603376,23.10375 L16.5663385,23.101125 L16.5723394,23.0985 L16.5787154,23.095875 L16.5914674,23.090625 L16.6042194,23.085375 L16.6105954,23.08275 L16.6237225,23.077125 L16.6368495,23.0715 C16.8345054,22.988625 17.0291608,22.9005 17.2211908,22.807125 L17.2275668,22.804125 L16.915143,22.125 Z M19.7884669,20.1225 C19.3650258,20.52825 18.9108298,20.900625 18.4296296,21.23625 L18.8586967,21.851625 C19.1478669,21.65025 19.4272855,21.4365 19.6969526,21.211125 L19.7078293,21.20175 L19.7243319,21.187875 L19.7352086,21.178875 L19.7404594,21.174375 L19.7509611,21.165375 L19.7562119,21.160875 L19.7610877,21.15675 L19.7659634,21.152625 L19.7708392,21.1485 L19.7753399,21.14475 L19.7798406,21.141 L19.7839662,21.137625 L19.7884669,21.133875 L19.7929677,21.130125 L19.7967182,21.12675 L19.8012189,21.123 L19.8053446,21.11925 L19.8087201,21.11625 L19.8128458,21.1125 L19.8162213,21.1095 L19.8199719,21.106125 L19.8240975,21.102375 L19.827098,21.09975 L19.8312236,21.096 L19.8345992,21.093 L19.8372246,21.09075 L19.83985,21.0885 L19.8421003,21.086625 L19.8458509,21.08325 L19.8484763,21.081 L19.878106,21.05475 L19.8814815,21.05175 L19.8837318,21.0495 L19.8863572,21.04725 L19.8889827,21.045 L19.8923582,21.042 L19.8942335,21.042 L19.8983591,21.038625 L19.9002344,21.038625 L19.9028598,21.036375 L19.9069855,21.032625 L19.9159869,21.02475 L19.9212377,21.02025 L19.9306142,21.012 L19.93624,21.007125 L19.9396156,21.004125 L19.9456165,20.998875 L19.955368,20.99025 L19.961369,20.985 L19.9711205,20.976375 L19.9876231,20.96175 C20.0922644,20.868375 20.1950305,20.773125 20.2962963,20.676 L19.7772152,20.1345 L19.7884669,20.1225 Z M21.9109236,17.336625 C21.632255,17.852625 21.3138303,18.34575 20.9586498,18.81225 L21.555368,19.26675 L21.555368,19.264875 L21.555368,19.262625 L21.5572433,19.26 L21.5602438,19.25625 L21.5621191,19.253625 L21.5639944,19.251 L21.5666198,19.247625 L21.5688701,19.244625 L21.5688701,19.242375 L21.5718706,19.23825 L21.5718706,19.236375 L21.574121,19.233375 L21.574121,19.231125 L21.5771214,19.227 L21.5771214,19.22475 L21.5793718,19.22175 L21.5819972,19.218375 L21.5842475,19.215375 L21.5842475,19.213125 L21.5876231,19.209 L21.5876231,19.207125 L21.5898734,19.20375 L21.5898734,19.201875 L21.5928739,19.19775 L21.5928739,19.1955 L21.5958744,19.191375 L21.5958744,19.189125 L21.5981247,19.18575 L21.5981247,19.183875 L21.6015002,19.179375 L21.6041256,19.176 L21.6041256,19.173375 L21.6067511,19.169625 L21.6101266,19.165125 L21.612752,19.16175 L21.6161275,19.15725 L21.6161275,19.155375 L21.619128,19.15125 L21.619128,19.149375 L21.6217534,19.146 L21.6251289,19.1415 L21.6277543,19.13775 L21.6277543,19.135875 L21.6307548,19.13175 L21.6341303,19.12725 L21.6371308,19.1235 L21.6405063,19.119 L21.6435068,19.114875 L21.6465073,19.11075 L21.6498828,19.105875 L21.6525082,19.102125 L21.6558837,19.097625 L21.6592593,19.093125 L21.6622597,19.089 L21.6656353,19.084125 L21.7158931,19.05 L21.7192686,19.0455 L21.7226442,19.040625 L21.7256446,19.0365 L21.7290202,19.031625 L21.7327707,19.02675 L21.7361463,19.02225 L21.7398969,19.017375 L21.7436474,19.0125 L21.747398,19.00725 L21.7507736,19.002375 L21.753774,18.99825 L21.7571496,18.993375 L21.7609001,18.988125 L21.7642757,18.98325 L21.7680263,18.978 L21.7717768,18.973125 L21.7755274,18.967875 L21.779278,18.962625 L21.7826535,18.95775 L21.7864041,18.9525 L21.7901547,18.94725 L21.7935302,18.94275 L21.7972808,18.9375 L21.8006564,18.933 L21.8044069,18.92775 L21.8081575,18.9225 L21.811158,18.918 L21.8145335,18.913125 L21.8182841,18.907875 L21.8216596,18.903 L21.8254102,18.89775 L21.8291608,18.8925 L21.8329114,18.88725 L21.836662,18.882 L21.8400375,18.877125 L21.843413,18.871875 L21.8509142,18.861 L21.8546648,18.85575 L21.8580403,18.850875 L21.8617909,18.845625 L21.8655415,18.840375 L21.868917,18.8355 L21.8722925,18.83025 L21.8760431,18.824625 L21.8797937,18.819375 L21.8835443,18.814125 L21.8869198,18.80925 L21.8906704,18.804 L21.894421,18.79875 L21.8977965,18.7935 L21.9015471,18.78825 L21.9052977,18.783 L21.9090483,18.777375 L21.9127989,18.77175 L21.9161744,18.7665 L21.919925,18.760875 L21.927473,18.75 L21.9308486,18.74475 L21.9342241,18.7395 L21.9379747,18.733875 L21.9417253,18.728625 L21.9451008,18.72375 L21.9488514,18.7185 L21.9559775,18.707625 L21.959353,18.702375 L21.9627286,18.6975 L21.9661041,18.69225 L21.9694796,18.687 L21.9724801,18.682125 L21.9758556,18.676875 L21.9792311,18.672 L21.9826067,18.66675 L21.9859822,18.6615 L21.9893577,18.656625 L21.9927332,18.651375 L21.9964838,18.64575 L21.9994843,18.640875 L22.0534459,18.5625 L22.0564463,18.558 L22.0598218,18.553125 L22.0631974,18.54825 L22.0661978,18.54375 L22.0695734,18.5385 L22.0729489,18.533625 L22.0759494,18.52875 L22.0793249,18.523875 L22.0819503,18.519375 L22.0853258,18.5145 L22.0883263,18.509625 L22.0909517,18.5055 L22.0943272,18.500625 L22.0973277,18.49575 L22.1003282,18.490875 L22.1037037,18.485625 L22.1063291,18.4815 L22.1093296,18.476625 L22.1284576,18.445125 L22.131083,18.441 L22.1340835,18.436125 L22.1367089,18.432 L22.1397093,18.4275 L22.1427098,18.422625 L22.1453352,18.4185 L22.1483357,18.413625 L22.1483357,18.41175 L22.1509611,18.407625 L22.1509611,18.40575 L22.1532114,18.402 L22.1532114,18.39975 L22.1562119,18.39525 L22.1562119,18.393375 L22.1584623,18.389625 L22.1584623,18.38775 L22.1610877,18.38325 L22.1610877,18.381 L22.1640881,18.3765 L22.1663385,18.37275 L22.1663385,18.370875 L22.169339,18.366375 L22.169339,18.364125 L22.1719644,18.36 L22.1745898,18.355875 L22.1745898,18.353625 L22.1775902,18.349125 L22.1775902,18.34725 L22.1798406,18.3435 L22.1798406,18.34125 L22.182466,18.337125 L22.182466,18.334875 L22.1854665,18.33 L22.1877168,18.326625 L22.1877168,18.324375 L22.1903422,18.32025 L22.1903422,18.317625 L22.1922175,18.314625 L22.1940928,18.31125 L22.1959681,18.307875 L22.1959681,18.305625 L22.1985935,18.301125 L22.1985935,18.298875 L22.2004688,18.2955 L22.2004688,18.292875 L22.2030942,18.28875 L22.2030942,18.2865 L22.2053446,18.28275 L22.2053446,18.27975 L22.2072199,18.27675 L22.2072199,18.2745 L22.2098453,18.27 L22.2098453,18.26775 L22.2117206,18.264375 L22.2135959,18.261375 L22.2154712,18.258 L22.2154712,18.25575 L22.2180966,18.25125 L22.2180966,18.249 L22.2199719,18.245625 L22.2199719,18.243375 L22.2229723,18.238875 L22.2229723,18.236625 L22.2252227,18.232875 L22.2252227,18.229875 L22.227098,18.2265 L22.227098,18.22425 L22.2297234,18.220125 L22.2297234,18.2175 L22.2297234,18.2145 L22.2315987,18.211125 L22.233474,18.20775 L22.233474,18.205125 L22.2357243,18.201375 L22.2357243,18.198375 L22.2357243,18.19575 L22.2357243,18.193125 L22.2383497,18.189 L22.2383497,18.186375 L22.2383497,18.183375 L22.2406001,18.17925 L22.2406001,18.176625 L22.2406001,18.174 L22.2428504,18.17025 L22.2451008,18.166875 L22.2451008,18.164625 L22.2477262,18.160125 L22.2477262,18.157875 L22.2477262,18.154875 L22.2477262,18.152625 L22.2503516,18.148125 L22.2503516,18.145875 L22.2533521,18.141 L22.2533521,18.13875 L22.2533521,18.13575 L22.2533521,18.133875 L22.2563526,18.129 L22.2563526,18.12675 L22.2563526,18.12375 L22.2563526,18.121125 L22.258978,18.116625 L22.258978,18.114375 L22.2616034,18.1095 L22.2616034,18.10725 L22.2616034,18.10425 L22.2616034,18.102 L22.2642288,18.097125 L22.2642288,18.09525 L22.2676043,18.08925 L22.2676043,18.08625 L22.2676043,18.084 L22.2702297,18.079125 L22.2702297,18.076875 L22.2702297,18.073875 L22.2736053,18.06825 L22.2766057,18.063375 L22.2766057,18.0615 L22.2766057,18.0585 L22.2766057,18.05625 L22.2796062,18.051375 L22.2796062,18.0495 L22.2856071,18.039 L22.2889827,18.033375 L22.2889827,18.03 L22.2923582,18.024375 L22.2961088,18.018375 L22.2979841,18.015 L22.3013596,18.009375 L22.3032349,18.006 L22.3066104,18 L22.3099859,17.994375 L22.3118612,17.991 L22.3156118,17.98425 L22.3219878,17.973375 L22.3253633,17.967375 L22.3317393,17.9565 L22.335865,17.949375 L22.3381153,17.945625 L22.342241,17.938125 L22.348617,17.926875 L22.3527426,17.91975 L22.3591186,17.9085 L22.3654946,17.89725 L22.3692452,17.890125 L22.3756212,17.878875 L22.3797468,17.87175 L22.5035162,17.8125 L22.5098922,17.800875 L22.5140178,17.793375 L22.5203938,17.78175 L22.5267698,17.770125 L22.5308955,17.762625 L22.5372714,17.751375 L22.5413971,17.743875 L22.5477731,17.732625 L22.5515237,17.7255 L22.5578997,17.713875 L22.5642757,17.70225 L22.566151,17.6985 L21.9060478,17.34225 L21.9109236,17.336625 Z M23.0709798,14.036625 C22.9655884,14.613 22.8151899,15.180375 22.6209095,15.733125 L23.3286451,15.98175 C23.3650258,15.877875 23.4002813,15.77325 23.4340366,15.667875 L23.4381622,15.655125 L23.4411627,15.6375 L23.443413,15.63075 L23.443413,15.627 L23.4452883,15.620625 L23.4452883,15.61875 L23.4452883,15.615375 L23.4452883,15.610875 L23.4452883,15.6075 L23.4452883,15.604875 L23.4452883,15.6 L23.4452883,15.597375 L23.4452883,15.594 L23.4452883,15.590625 L23.4452883,15.5865 L23.4452883,15.583125 L23.4452883,15.580125 L23.4452883,15.57525 L23.4452883,15.573 L23.4452883,15.56925 L23.4452883,15.566625 L23.4452883,15.561375 L23.4452883,15.55875 L23.4452883,15.555 L23.4452883,15.552375 L23.4452883,15.5475 L23.4452883,15.544875 L23.4452883,15.540375 L23.4452883,15.537375 L23.4452883,15.53325 L23.4452883,15.531 L23.4452883,15.52575 L23.4452883,15.5235 L23.4452883,15.519375 L23.4452883,15.51375 L23.4452883,15.5115 L23.4452883,15.506625 L23.4452883,15.500625 L23.4452883,15.494625 L23.4452883,15.489375 L23.4452883,15.483375 L23.4452883,15.478125 L23.4452883,15.472125 L23.4471636,15.46575 L23.4471636,15.45975 L23.4490389,15.453375 L23.4490389,15.447375 L23.4509142,15.441 L23.4550398,15.4275 L23.4587904,15.414 L23.5221753,15.375 L23.526301,15.3615 L23.5323019,15.3405 L23.5364276,15.326625 L23.5405532,15.31275 C23.5994374,15.106875 23.6530708,14.89875 23.7014534,14.688375 L23.7063291,14.667 L23.7093296,14.653125 L23.7123301,14.63925 L23.7123301,14.6325 L23.7123301,14.62575 L23.7123301,14.619 L23.7153305,14.605875 L23.7153305,14.5995 L23.7153305,14.5935 L23.7153305,14.587125 L23.7153305,14.581125 L23.7153305,14.57475 L23.7153305,14.568375 L23.7153305,14.562375 L23.7153305,14.556375 L23.7153305,14.551125 L23.7153305,14.545125 L23.7153305,14.5395 L23.7153305,14.533875 L23.7153305,14.531625 L23.7153305,14.526 L23.7153305,14.5215 L23.7153305,14.50125 L23.7153305,14.495625 L23.7153305,14.493375 L23.7153305,14.488875 L23.7153305,14.487 L23.7153305,14.481375 L23.7153305,14.47875 L23.7153305,14.47425 L23.7153305,14.47125 L23.7153305,14.467125 L23.7153305,14.464125 L23.7153305,14.45925 L23.7153305,14.45625 L23.7153305,14.452875 L23.7153305,14.45025 L23.7153305,14.445 L23.7153305,14.442 L23.7153305,14.438625 L23.7153305,14.4345 L23.7153305,14.431125 L23.7153305,14.42775 L23.7153305,14.424375 L23.7153305,14.419875 L23.7153305,14.416875 L23.7153305,14.4135 L23.7153305,14.40975 L23.7153305,14.40525 L23.7153305,14.40375 L23.7153305,14.396625 L23.7153305,14.392875 L23.7153305,14.386125 L23.7153305,14.382375 L23.7153305,14.374875 L23.7179559,14.362125 C23.7303329,14.300625 23.7419597,14.238375 23.7532114,14.176875 L23.0154712,14.04225 L23.0709798,14.036625 Z M23.9032349,10.436625 L23.1594937,10.533375 C23.2225035,11.01975 23.2536334,11.5095 23.2536334,12 C23.2536334,12.095625 23.2525082,12.19125 23.2498828,12.2865 L24,12.30525 C24,12.276375 24,12.247125 24,12.217875 L24,12.133875 L24,12.12975 L24,12.125625 L24,12.1215 L24,12.009 L24,12 L24,11.651625 L24,11.643 L24,11.619375 L24,11.61375 L24,11.59575 L24,11.5875 L24,11.573625 L24,11.569125 L24,11.55 L24,11.545125 L24,11.526 C23.9857478,11.157375 23.954993,10.79325 23.9081106,10.434 L23.9032349,10.436625 Z M22.8470699,6.854625 L22.169714,7.17675 C22.4210033,7.70475 22.630286,8.251875 22.7960619,8.8125 L23.5154243,8.600625 C23.4737928,8.45925 23.4295359,8.318625 23.3826535,8.179125 L23.3781528,8.166 L23.3759025,8.15925 L23.3736521,8.152875 L23.3714018,8.1465 L23.3691514,8.140125 L23.3669011,8.13375 L23.3650258,8.12775 L23.3650258,8.1225 L23.3631505,8.1165 L23.3631505,8.11125 L23.3631505,8.106 L23.3631505,8.10375 L23.3612752,8.098125 L23.3612752,8.093625 L23.3612752,8.09175 L23.3612752,8.0865 L23.3612752,8.08425 L23.3612752,8.080125 L23.3612752,8.077125 L23.3612752,8.073 L23.3612752,8.07075 L23.3612752,8.065875 L23.3612752,8.06325 L23.3612752,8.059875 L23.3612752,8.05725 L23.3612752,8.052375 L23.3612752,8.049375 L23.3612752,8.04675 L23.3612752,8.04225 L23.3612752,8.03925 L23.3612752,8.03625 L23.3612752,8.03325 L23.3612752,8.02875 L23.3612752,8.026125 L23.3612752,8.02275 L23.3612752,8.01825 L23.3612752,8.014875 L23.3612752,8.012625 L23.3593999,8.007 L23.3593999,8.00475 L23.3593999,8.001 L23.3571496,7.99425 L23.3530239,7.982625 L23.3503985,7.975125 L23.3458978,7.96275 C23.2285045,7.63575 23.0979841,7.315875 22.9535865,7.00275 L22.9479606,6.99075 L22.9445851,6.98325 L22.9445851,6.9795 L22.9415846,6.97275 L22.9363338,6.9615 L22.9337084,6.955875 L22.9337084,6.954 L22.9337084,6.950625 L22.9337084,6.948375 L22.8785748,6.922125 L22.8785748,6.919875 L22.8785748,6.916875 L22.8766995,6.912375 L22.8766995,6.909375 L22.8766995,6.907125 L22.8748242,6.902625 L22.8748242,6.899625 L22.8748242,6.897 L22.8748242,6.893625 L22.8748242,6.89025 L22.8748242,6.886875 L22.8748242,6.88425 L22.8725738,6.879375 L22.8725738,6.877125 L22.8725738,6.873375 L22.8725738,6.8715 L22.8703235,6.86625 L22.8703235,6.864375 L22.8680731,6.8595 L22.8661978,6.855 L22.8470699,6.854625 Z M20.7373652,3.7725 L20.1916549,4.287 C20.5940928,4.71375 20.9624004,5.17125 21.2939522,5.655 L21.9127989,5.23125 C21.7365213,4.973625 21.5504923,4.723875 21.3550867,4.48125 L21.3468354,4.47075 L21.3408345,4.4625 L21.3325832,4.452375 L21.3277075,4.446375 L21.325082,4.443 L21.3202063,4.437 L21.3123301,4.427625 L21.3085795,4.423125 L21.3063291,4.4205 L21.3063291,4.41825 L21.3029536,4.414125 L21.2999531,4.410375 L21.2977028,4.40775 L21.2958275,4.4055 L21.2935771,4.402875 L21.2909517,4.3995 L21.2890764,4.39725 L21.2868261,4.394625 L21.2838256,4.390875 L21.2838256,4.388625 L21.2815752,4.385625 L21.2793249,4.383 L21.2766995,4.379625 L21.2766995,4.37775 L21.273324,4.373625 L21.273324,4.37175 L21.2706985,4.36875 L21.266948,4.36425 L21.2635724,4.360125 L21.260572,4.35675 L21.2568214,4.35225 L21.2534459,4.3485 L21.2500703,4.344375 L21.2463197,4.339875 L21.2429442,4.33575 L21.2391936,4.33125 L21.235443,4.32675 L21.2316925,4.322625 L21.2279419,4.318125 L21.2238162,4.31325 L21.1908111,4.27875 L21.1866854,4.273875 L21.1825598,4.269 L21.1780591,4.26375 L21.1694327,4.25325 L21.1653071,4.248 L21.1533052,4.23375 L21.1488045,4.2285 L21.1398031,4.217625 L21.1304266,4.20675 C21.0036568,4.058625 20.8731364,3.9135 20.7392405,3.771375 L20.7373652,3.7725 Z M17.7849039,1.485 L17.4222222,2.1375 C17.9356774,2.420625 18.4262541,2.743125 18.8898265,3.102375 L19.3496484,2.5125 C19.0676043,2.293875 18.7758087,2.088 18.4746367,1.8945 L18.4558837,1.8825 L18.4442569,1.875 L18.425504,1.863375 L18.4153774,1.854 L18.4082513,1.8495 L18.3973746,1.842375 L18.3789967,1.83075 L18.36812,1.824 L18.361369,1.819875 L18.3504923,1.813125 L18.3396156,1.806375 L18.3336146,1.802625 L18.323113,1.795875 L18.3163619,1.79175 L18.3126113,1.7895 L18.3054852,1.785375 L18.2991092,1.781625 L18.2957337,1.77975 L18.2901078,1.776375 L18.265354,1.7625 L18.2601031,1.759125 L18.2567276,1.75725 L18.2507267,1.7535 L18.2447257,1.74975 L18.2413502,1.747875 L18.2394749,1.747875 L18.2278481,1.738125 L18.2255977,1.738125 L18.2225973,1.738125 L18.2203469,1.738125 L18.2154712,1.735125 L18.2135959,1.735125 L18.2072199,1.725 L18.2023441,1.725 L18.1967182,1.721625 L18.1903422,1.717875 L18.1869667,1.716 L18.1817159,1.713 L18.1798406,1.713 L18.1768401,1.711125 L18.1712143,1.70775 L18.169339,1.70775 L18.1640881,1.70475 L18.1528364,1.693125 L18.1445851,1.6875 L18.1340835,1.681125 L18.1322082,1.681125 L18.1269573,1.678125 L18.125082,1.678125 L18.1220816,1.678125 L18.1198312,1.678125 L18.1153305,1.67025 L18.1130802,1.67025 L18.1085795,1.667625 L18.1059541,1.667625 L18.1029536,1.667625 L18.1007032,1.667625 L18.0958275,1.665 L18.0939522,1.665 L18.0887014,1.662 L18.0868261,1.662 L18.0838256,1.662 L18.0819503,1.662 L18.0770745,1.659 L18.0748242,1.659 L18.0718237,1.659 L18.0691983,1.659 L18.0646976,1.656375 L18.0628223,1.656375 L18.0579466,1.653375 L18.0556962,1.653375 L18.0526957,1.653375 L18.0504454,1.653375 L18.0455696,1.650375 L18.0436943,1.650375 L18.0406939,1.650375 L18.0384435,1.650375 L18.0335677,1.647375 L18.0316925,1.647375 L18.0264416,1.644375 L18.0245663,1.644375 L18.0211908,1.644375 L18.0121894,1.6125 L18.0103141,1.6125 L18.0050633,1.6095 L18.0016878,1.607625 L17.9960619,1.60425 L17.9855602,1.59825 L17.9803094,1.59525 L17.9769339,1.593375 L17.971308,1.59 L17.964557,1.58625 L17.9488045,1.575 L17.9428036,1.571625 L17.9278012,1.563375 L17.9221753,1.56 L17.9187998,1.558125 L17.9127989,1.55475 L17.9019222,1.54875 L17.8951711,1.545 L17.8839194,1.538625 L17.8726676,1.53225 L17.8659165,1.5285 L17.8546648,1.522125 L17.8355368,1.511625 L17.8040319,1.494375 L17.7939053,1.48875 L17.7849039,1.485 Z M14.2709798,0.214125 L14.1299578,0.950625 C14.7056728,1.060875 15.2716362,1.216125 15.8229723,1.414875 L16.0776371,0.7095 C15.8252227,0.618375 15.5686826,0.5355 15.3083919,0.460875 L15.2945148,0.45675 L15.2806376,0.453 L15.2731364,0.45 L15.2596343,0.44625 L15.2461322,0.4425 L15.2397562,0.4425 L15.2337553,0.4425 L15.2273793,0.4425 L15.2213783,0.4425 L15.2150023,0.4425 L15.2090014,0.4425 L15.2033755,0.4425 L15.1977496,0.4425 L15.1928739,0.4425 L15.1868729,0.4425 L15.1816221,0.4425 L15.1759962,0.4425 L15.174121,0.4425 L15.1684951,0.4425 L15.1636193,0.4425 L15.1579934,0.4425 L15.1561181,0.4425 L15.1516174,0.4425 L15.1497421,0.4425 L15.1444913,0.4425 L15.142241,0.4425 L15.1373652,0.4425 L15.1347398,0.4425 L15.1302391,0.4425 L15.1279887,0.4425 L15.1227379,0.4425 L15.1204876,0.4425 L15.116737,0.4425 L15.1144866,0.4425 L15.1092358,0.4425 L15.1066104,0.4425 L15.1028598,0.4425 L15.0991092,0.4425 L15.0953586,0.4425 L15.0927332,0.4425 L15.0882325,0.4425 L15.084857,0.4425 L15.0814815,0.4425 L15.0788561,0.4425 L15.0736053,0.4425 L15.0709798,0.4425 L15.0676043,0.4425 L15.0642288,0.4425 L15.0597281,0.4425 L15.0571027,0.4425 L15.0533521,0.4425 L15.0496015,0.4425 L15.046226,0.4425 L15.0432255,0.4425 L15.0387248,0.4425 L15.0353493,0.4425 L15.0323488,0.4425 L15.0293483,0.4425 L15.0244726,0.4425 L15.0214721,0.4425 L15.0180966,0.4425 L14.9948429,0.375 L14.9914674,0.375 L14.9880919,0.375 L14.9854665,0.375 L14.9802157,0.375 L14.9779653,0.375 L14.9745898,0.375 L14.9723394,0.375 L14.9667135,0.375 L14.9648383,0.375 L14.9580872,0.375 L14.9543366,0.375 L14.9475856,0.375 L14.943835,0.375 L14.9370839,0.375 L14.9273324,0.375 L14.9164557,0.35625 L14.9089545,0.354375 L14.9048289,0.354375 L14.8973277,0.354375 L14.880075,0.34725 L14.8665729,0.343875 L14.8579466,0.342 L14.8440694,0.3375 L14.8301922,0.33525 L14.8076887,0.329625 L14.7938115,0.32625 L14.7803094,0.32325 C14.6820441,0.3 14.5834037,0.277875 14.4847632,0.25725 L14.4472574,0.24975 L14.4348805,0.24675 L14.4210033,0.24375 L14.412752,0.24375 L14.3981247,0.23925 L14.3842475,0.23625 L14.3756212,0.23625 L14.3711205,0.23625 L14.3624941,0.23625 L14.3478669,0.229125 L14.3339897,0.225 L14.3257384,0.225 L14.3197375,0.225 L14.3114862,0.225 L14.2972339,0.219375 L14.2897328,0.2175 L14.2856071,0.2175 L14.2792311,0.2175 L14.2709798,0.2175 L14.2709798,0.214125 Z M12.0018753,0 L12.0018753,0.75 C12.1297703,0.75 12.2572902,0.75225 12.38406,0.756375 L12.4091889,0.006375 C12.3251758,0.004125 12.2415377,0.001875 12.1571496,0 L12.0018753,0 Z"
              id="Shape"
              fill="#000000"
              fill-rule="nonzero"
            ></Path>
            <G
              id="Group"
              transform="translate(7.000000, 6.000000)"
              fill="#38CCFE"
            >
              <Rect
                id="Rectangle"
                x="4.22021747"
                y="0.89281603"
                width="1.5"
                height="10"
                rx="0.75"
              ></Rect>
              <Rect
                id="Rectangle"
                x="0"
                y="5"
                width="10"
                height="1.5"
                rx="0.75"
              ></Rect>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default AddCompIcon;
