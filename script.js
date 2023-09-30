//1 create element
let section1 = document.createElement('section')
section1.classList.add('head')
let section2 = document.createElement('section')
section2.classList.add('products')
let container = document.createElement('div')
container.classList.add('container')
let header = document.createElement('header')
let head_top = document.createElement('div')  
head_top.classList.add('head_top')  
let head_down = document.createElement('div')
head_down.classList.add('head_down')  
let h_left = document.createElement('div')
h_left.classList.add('h_left')  
let h_mid = document.createElement('div')
h_mid.classList.add('h_mid')  
let h_right = document.createElement('div')
h_right.classList.add('h_right')
let h_btns = document.createElement('div')
h_btns.classList.add('h_btns')
h_text.classList.add('h_text')
let h_text = document.createElement('div')
let h_btns_button1 = document.createElement('button')
h_btns_button1.innerHTML = '0% Рассрочка'
let h_btns_button2 = document.createElement('button')
h_btns_button2.innerHTML = 'Скидки'
h_btns_button2.classList.add('discounts')
let h_btns_button3  = document.createElement('button')
h_btns_button3 .innerHTML ='Розыгрыши'
let h_text_span1 = document.createElement('span')
h_text_span1.innerHTML = 'Карта сайта'
let h_text_span2 = document.createElement('span')
h_text_span2.innerHTML = 'Выберите регион'
let h_text_span1_br = document.createElement('br')
let h_text_span2_br = document.createElement('br')
let h_mid_svg = document.createElement('svg')
h_mid_svg.width = '24'
h_mid_svg.height = '24'
h_mid_svg.fill = 'none'
let h_mid_svg_path = document.createElement('path')
h_mid_svg_path.d = 'M12.7105 15.54L18.3605 9.87998C18.4542 9.78702 18.5286 9.67642 18.5793 9.55456C18.6301 9.4327 18.6562 9.30199 18.6562 9.16998C18.6562 9.03797 18.6301 8.90726 18.5793 8.78541C18.5286 8.66355 18.4542 8.55294 18.3605 8.45998C18.1731 8.27373 17.9196 8.16919 17.6555 8.16919C17.3913 8.16919 17.1378 8.27373 16.9505 8.45998L11.9505 13.41L7.00045 8.45998C6.81309 8.27373 6.55964 8.16919 6.29545 8.16919C6.03127 8.16919 5.77781 8.27373 5.59045 8.45998C5.49596 8.5526 5.42079 8.66304 5.3693 8.78492C5.3178 8.90679 5.291 9.03767 5.29045 9.16998C5.291 9.30229 5.3178 9.43317 5.3693 9.55505C5.42079 9.67692 5.49596 9.78737 5.59045 9.87998L11.2405 15.54C11.3341 15.6415 11.4477 15.7225 11.5742 15.7779C11.7007 15.8333 11.8373 15.8619 11.9755 15.8619C12.1136 15.8619 12.2502 15.8333 12.3767 15.7779C12.5032 15.7225 12.6168 15.6415 12.7105 15.54Z'
h_mid_svg_path.fill = 'white'
let h_mid_p = document.createElement('p')
h_mid_p.innerHTML = '+998 (71) 202 202 1'
let h_mid_button = document.createElement('button')
h_mid_button.innerHTML = 'Продавайте на olcha'
let h_right_span1 = document.createElement('span')
h_right_span1.innerHTML = 'Узб'
let h_right_span2 = document.createElement('span')
h_right_span2.innerHTML = 'Oz'
let h_right_span3 = document.createElement('span')
h_right_span3.innerHTML = 'Rus'
h_right_span3.classList.add('white')
let head_down_a = document.createElement('a')
head_down_a.href = '#'
let head_down_svg = document.createElement('svg')
head_down_svg.xmlns = 'http://www.w3.org/2000/svg'
head_down_svg.width = '102'
head_down_svg.height = '30'
head_down_svg.fill = 'none'
let head_down_path = document.createElement('path')
head_down_path.d = 'M0 18.8909V18.8103C0 12.6348 5.08749 7.62137 11.937 7.62137C18.7464 7.62137 23.7895 12.5547 23.7895 18.7302V18.8103C23.7895 24.9857 18.7043 30 11.8545 30C5.0471 30 0 25.0642 0 18.8909ZM26.5361 3.04948C26.5361 1.36637 27.9309 0 29.6531 0C31.3767 0 32.7693 1.36637 32.7693 3.04948V26.7111C32.7693 28.395 31.3767 29.7589 29.6531 29.7589C27.9309 29.7589 26.5361 28.395 26.5361 26.7111V3.04948ZM35.5172 18.8909V18.8103C35.5172 12.6743 40.3158 7.62137 47.0428 7.62137C50.3646 7.62137 52.7027 8.50448 54.5486 10.0269C54.9601 10.3472 55.5323 11.0713 55.5323 12.1129C55.5323 13.6361 54.2619 14.8407 52.7027 14.8407C51.882 14.8407 51.2675 14.5187 50.8981 14.2384C49.7904 13.3964 48.6427 12.8745 47.0029 12.8745C43.8845 12.8745 41.6686 15.5628 41.6686 18.7302V18.8103C41.6686 22.0994 43.8441 24.7466 47.2475 24.7466C48.8895 24.7466 50.1598 24.183 51.3499 23.2631C51.6787 23.0193 52.2932 22.6995 53.0314 22.6995C54.5068 22.6995 55.6571 23.8632 55.6571 25.3077C55.6571 26.1108 55.2871 26.7503 54.7536 27.233C52.9092 28.875 50.571 30 46.9609 30C40.3579 30 35.5172 25.0269 35.5172 18.8909ZM58.7722 3.04948C58.7722 1.36637 60.167 0 61.8889 0C63.6128 0 65.0051 1.36637 65.0051 3.04948V11.0696C66.4407 9.26609 68.2866 7.62164 71.4457 7.62164C76.1618 7.62164 78.9111 10.6697 78.9111 15.6006V26.7111C78.9111 28.395 77.5143 29.7589 75.7927 29.7589C74.0705 29.7589 72.6762 28.395 72.6762 26.7111V17.5259C72.6762 14.6391 71.2811 13.1551 68.9028 13.1551C66.5223 13.1551 65.0051 14.6391 65.0051 17.5259V26.7111C65.0051 28.395 63.6128 29.7589 61.8889 29.7589C60.167 29.7589 58.7722 28.395 58.7722 26.7111V3.04948ZM81.7808 23.3407V23.2623C81.7808 18.5689 85.4314 16.4045 90.6394 16.4045C92.8528 16.4045 94.4543 16.7657 96.011 17.2857V16.9261C96.011 14.3986 94.412 12.9957 91.2952 12.9957C89.5716 12.9957 88.1765 13.2349 86.9889 13.598C86.6189 13.7179 86.3727 13.7573 86.0854 13.7573C84.6507 13.7573 83.5024 12.6737 83.5024 11.2709C83.5024 10.1876 84.1989 9.26582 85.1828 8.90407C87.1507 8.18195 89.2841 7.78181 92.1984 7.78181C95.6021 7.78181 98.0625 8.66492 99.622 10.1876C101.261 11.7926 102 14.1594 102 17.0457V26.832C102 28.4768 100.647 29.76 98.9654 29.76C97.1593 29.76 95.9692 28.5157 95.9692 27.2325V27.1927C94.4543 28.8355 92.3608 29.9188 89.3248 29.9188C85.1828 29.9188 81.7808 27.5937 81.7808 23.3407ZM96.0935 21.9379V20.8549C95.0282 20.376 93.6334 20.054 92.1159 20.054C89.449 20.054 87.809 21.0962 87.809 23.021V23.1016C87.809 24.746 89.2039 25.7079 91.2133 25.7079C94.1248 25.7079 96.0935 24.1457 96.0935 21.9379ZM17.6382 18.8909V18.8103C17.6382 15.6434 15.3009 12.8745 11.8545 12.8745C8.28644 12.8745 6.15305 15.5628 6.15305 18.7302V18.8103C6.15305 21.9777 8.4912 24.7466 11.937 24.7466C15.5073 24.7466 17.6382 22.0583 17.6382 18.8909Z'
head_down_path.fill = '#DA002B'
let head_down_button = document.createElement('button')
let head_down_button_div = document.createElement('div')
head_down_button_div.classList.add('burger')
let head_down_button_div_span1 = document.createElement('span')
let head_down_button_div_span2 = document.createElement('span')
let head_down_button_div_span3 = document.createElement('span')
let head_down_button_p = document.createElement('p')
head_down_button_p.innerHTML = 'Каталог'
let head_down_div1 = document.createElement('div')
head_down_div1.classList.add('searcher')
let head_down_div1_inp = document.createElement('inp')
head_down_div1_inp.type = "text"
head_down_div1_inp.placeholder = "Поиск по каталогу"
let head_down_div1_btn = document.createElement('btn')
let head_down_div1_btn_svg = document.createElement('svg')
head_down_div1_btn_svg.width = "24"
head_down_div1_btn_svg.height = "24"
head_down_div1_btn_svg.xmlns = "http://www.w3.org/2000/svg"
head_down_div1_btn_svg.fill = "none"
let head_down_div1_btn_svg_path = document.createElement('path')
head_down_div1_btn_svg_path.d = "M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43203 2.04546 6.24272 2.98759 4.61514 4.61517C2.98756 6.24275 2.04543 8.43207 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8482 21.617 21.7738 21.71 21.68C21.8902 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9923 4.1345 9.63439C4.4046 8.27653 5.07128 7.02925 6.05025 6.05028C7.02922 5.07131 8.2765 4.40463 9.63436 4.13453C10.9922 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z"
head_down_div1_btn_svg_path.fill = 'none'
let head_down_div2 = document.createElement('div')
head_down_div2.classList.add('comparison si')
let head_down_div2_svg = document.createElement('svg')
head_down_div2_svg.width = '24'
head_down_div2_svg.height = '24'
head_down_div2_svg.xmlns = 'http://www.w3.org/2000/svg'
head_down_div2_svg.classList.add('icon_comparison')
for(let i = 0;i <= 3; i++) {
    let rect = document.createElement('rect')
    rect.x = '3.25', '8.25', '13.25', '18.25' 
    rect.y = '15', '3', '11', '7'
    rect.width = '2.5'
    rect.height = '7', '19', '11', '15'
    rect.rx = '1.25'
    head_down_div2_svg.append(rect)
}
let head_down_div2_p = document.createElement('p')
head_down_div2_p.innerHTML = 'Сравнение'
let head_down_div3 = document.createElement('div')
head_down_div3.classList.add('favourites si')
let head_down_div3_svg = document.createElement('svg')
head_down_div3_svg.width = '24'
head_down_div3_svg.height = '24'
head_down_div3_svg.xmlns = 'http://www.w3.org/2000/svg'
head_down_div3_svg.classList.add('icon_favorites')
let head_down_div3_svg_path = document.createElement('path')
head_down_div3_svg_path.d = 'M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z'
let head_down_div3_p = document.createElement('p')
head_down_div3_p.innerHTML = 'Избранные'
let head_down_div4 = document.createElement('div') 
head_down_div4.classList.add('bag si')
let head_down_div4_span = document.createElement('span')
let head_down_div4_svg = document.createElement('svg')
head_down_div4_svg.width = '24'
head_down_div4_svg.height = '24'
head_down_div4_svg.xmlns = 'http://www.w3.org/2000/svg'
let head_down_div4_svg_path1 = document.createElement('path')
head_down_div4_svg_path1.d = 'M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z'
let head_down_div4_svg_path2 = document.createElement('path')
head_down_div4_svg_path2.d = 'M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z'
let head_down_div4_svg_path3 = document.createElement('path')
head_down_div4_svg_path3.d = 'M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375'
let head_down_div4_p = document.createElement('p')
head_down_div4_p.innerHTML = 'Корзина'
let head_down_div5 = document.createElement('div')
head_down_div5.classList.add('come_in si')
let head_down_div5_svg = document.createElement('svg')
head_down_div5_svg.width = '24'
head_down_div5_svg.height = '24'
head_down_div5_svg.xmlns = 'http://www.w3.org/2000/svg'
let head_down_div5_svg_path = document.createElement('path')
head_down_div5_svg_path.d = "M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698 6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525 1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027 5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994 4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093 21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518 3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475 14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504 19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97 22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595 19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355 11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686 7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956 3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16 7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z"
let head_down_div5_p = document.createElement('p')
head_down_div5_p.innerHTML = 'Войти'

//2 create styling (css, attributes, text)

//3 append
document.body.prepend(section1, section2)
section1.append(container)
container.append(header)
header.append(head_top, head_down)
head_top.append(h_left, h_mid, h_right)
h_left.append(h_btns, h_text)
h_btns.append(h_btns_button1, h_btns_button2, h_btns_button3)
h_text.append(h_text_span1, h_text_span2)
h_text_span1.append(h_text_span1_br)
h_text_span2.append(h_text_span2_br)
h_mid.append(h_mid_svg, h_mid_p, h_mid_button)
h_mid_svg.append(h_mid_svg_path)
h_right.append(h_right_span1, h_right_span2, h_right_span3)
head_down.append(head_down_a, head_down_button, head_down_div1, head_down_div2, head_down_div3, head_down_div4, head_down_div5)
head_down_a.append(head_down_svg)
head_down_svg.append(head_down_path)
head_down_button.append(head_down_button_div)
head_down_button_div.append(head_down_button_div_span1, head_down_button_div_span2, head_down_button_div_span3)
head_down_div1.append(head_down_div1_inp, head_down_div1_btn)
head_down_div1_btn.append(head_down_div1_btn_svg, head_down_div1_btn_svg_path)
head_down_div2.append(head_down_div2_svg, head_down_div2_p)
head_down_div3.append(head_down_div3_svg, head_down_div3_p)
head_down_div3_svg.append(head_down_div3_svg_path)
head_down_div4.append(head_down_div4_span, head_down_div4_svg, head_down_div4_p)
head_down_div4_svg.append(head_down_div4_svg_path1, head_down_div4_svg_path2, head_down_div4_svg_path3)
head_down_div5.append(head_down_div5_svg, head_down_div5_p)
head_down_div5_svg.append(head_down_div5_svg_path)

section2.classList.add('products')
let product_box = document.createElements('div')
product_box.classList.add('product_box')
let product_card = document.createElements('nav')
product_card.classList.add('product_card')
let product_card_a = document.createElements('a')
product_card_a.href = '#'
let product_card_div = document.createElements('div')
product_card_div.classList.add('img_box')
let a_img = document.createElements('img')
a_img.src = './imgs/noutbuk-lenovo-v15-igl-n4020-4256-gb-ssd-156-hd-185052-0.jpeg';
let a_h2 = document.createElements('h2')
a_h2.innerHTML = "Ноутбук Lenovo 81WQ001 XRK V15 N4020 4GB 1TB 15.6""
let a_h2_br = document.createElements('br')
let a_p1 = document.createElements('p')
a_p1.innerHTML = "4 025 000"
a_p1.classList.add('old_cost')
let a_p2 = document.createElements('p')
a_p2.innerHTML = "2 953 000"
a_p2.classList.add('new_cost')
let a_span1 = document.createElements('span')
a_span1.innerHTML = 'Сум'
let a_span2 = document.createElements('span')
a_span1.innerHTML = 'Сум'
let a_button = document.createElements('button')
a_button.classList.add('muttaham_info')
let a_muttaham_box = document.createElements('div')
a_muttaham_box.classList.add('muttaham_box')
let a_bag_box = document.createElements('button')
a_bag_box.classList.add('bag_box');
let a_muttaham_btn = document.createElements('button')
a_muttaham_btn.classList.add('muttaham_btn')
a_muttaham_btn.innerHTML = 'В рассрочку'
let a_bag_box_svg = document.createElements('svg')
a_bag_box_svg.width = 20
a_bag_box_svg.height = 20
a_bag_box_svg.xmlns = 'http://www.w3.org/2000/svg'
let a_bag_box_svg_path1 = document.createElements('path')
a_bag_box_svg_path1.d = 'M5.625 18.75C6.48795 18.75 7.1875 18.0504 7.1875 17.1875C7.1875 16.3246 6.48795 15.625 5.625 15.625C4.76206 15.625 4.0625 16.3246 4.0625 17.1875C4.0625 18.0504 4.76206 18.75 5.625 18.75Z'
let a_bag_box_svg_path2 = document.createElements('path')
a_bag_box_svg_path2.d = 'M15 18.75C15.8629 18.75 16.5625 18.0504 16.5625 17.1875C16.5625 16.3246 15.8629 15.625 15 15.625C14.1371 15.625 13.4375 16.3246 13.4375 17.1875C13.4375 18.0504 14.1371 18.75 15 18.75Z'
let a_bag_box_svg_path3 = document.createElements('path')
a_bag_box_svg_path3.d = 'M3.125 5H16.7512C16.8427 5 16.9332 5.02011 17.0161 5.0589C17.099 5.0977 17.1724 5.15423 17.231 5.22451C17.2897 5.29479 17.3322 5.37709 17.3555 5.4656C17.3789 5.55412 17.3825 5.64668 17.3661 5.73674L16.0601 12.9242C16.0339 13.0683 15.958 13.1985 15.8456 13.2923C15.7332 13.3861 15.5915 13.4375 15.4451 13.4375H5.18665C5.04034 13.4375 4.89866 13.3862 4.78631 13.2924C4.67395 13.1987 4.59804 13.0686 4.57179 12.9246L2.65034 2.38788C2.6241 2.24394 2.54818 2.11377 2.43583 2.02005C2.32347 1.92633 2.1818 1.875 2.03548 1.875H0.9375'
let div_svg1 = document.createElement('svg')
div_svg1.width = '24'
div_svg1.height = '24'
div_svg1.xmlns = 'http://www.w3.org/2000/svg'
div_svg1.classList.add('icon__favorites')
let div_svg2 = document.createElement('svg')
div_svg2.width = '24'
div_svg2.height = '24'
div_svg2.classList.add('icon_comparison')
let div_svg1_path = document.createElement('path')
div_svg1_path.d = 'M21.2913 4.61183C20.7805 4.10083 20.1741 3.69547 19.5066 3.41891C18.8392 3.14235 18.1238 3 17.4013 3C16.6788 3 15.9634 3.14235 15.2959 3.41891C14.6285 3.69547 14.022 4.10083 13.5113 4.61183L12.4513 5.67183L11.3913 4.61183C10.3596 3.58013 8.96032 3.00053 7.50129 3.00053C6.04226 3.00053 4.64298 3.58013 3.61129 4.61183C2.5796 5.64352 2 7.04279 2 8.50183C2 9.96086 2.5796 11.3601 3.61129 12.3918L4.67129 13.4518L12.4513 21.2318L20.2313 13.4518L21.2913 12.3918C21.8023 11.8811 22.2076 11.2746 22.4842 10.6072C22.7608 9.93972 22.9031 9.22431 22.9031 8.50183C22.9031 7.77934 22.7608 7.06393 22.4842 6.39647C22.2076 5.72901 21.8023 5.12258 21.2913 4.61183V4.61183Z'
for(let i = 0;i <= 3; i++) {
    let rect = document.createElement('rect')
    rect.x = '3.25', '8.25', '13.25', '18.25' 
    rect.y = '15', '3', '11', '7'
    rect.width = '2.5'
    rect.height = '7', '19', '11', '15'
    rect.rx = '1.25'
    div_svg2.append(rect)
}
section2.append(product_box)
product_box.append(product_card)
product_card.append(product_card_a, product_card_div)
product_card_a.append(a_img, a_h2, a_p1, a_p2, a_button, a_muttaham_box);
a_h2.append(a_h2_br)
a_p1.append(a_span1)
a_p2.append(a_span2)
a_muttaham_box.append(a_bag_box, a_muttaham_btn)
a_bag_box.append(a_bag_box_svg)
a_bag_box_svg.append(a_bag_box_svg_path1, a_bag_box_svg_path2, a_bag_box_svg_path3)
product_card_div.append(div_svg1, div_svg2)
div_svg1.append(div_svg1_path)
console.log();