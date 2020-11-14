import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {connect} from 'react-redux'
import {set_ad} from '../store/action'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Home from './Home'

class Sell extends Component {
    state = {
        Main :{style:true, classChange:"none"},
        SelectedCategory: "",
        SelectedSubCategory: "",
        SelectedDetails: [{title:'Ad Title',value:'null'},{title:'Description',value:'null'},{title:'Price',value:'null'},],
        Clicked : false,
        subItem : [],
        Div : [],
        input: {num:0, action:false},
        select: {num:0, action:false},
        button: {num:0, action:false},
        images: [],
        profile: this.props.current_user.profile,
        name: this.props.current_user.name,
        totalImages: [0,1,2,3,4,5,6,7,8,9,10,11],
        Category : [
            {Id:0, title: 'Mobiles', icon: "mobile-alt", clicked: false},
            {Id:1, title: 'Vehicles', icon: "car-alt", clicked: false},
            {Id:2, title: 'Property For Sale', icon: "store", clicked: false},
            {Id:3, title: 'Property For Rent', icon: "store-alt", clicked: false},
            {Id:4, title: 'Electronics & Home Aplpliances', icon: "desktop", clicked: false},
            {Id:5, title: 'Bikes', icon: "motorcycle", clicked: false},
            {Id:6, title: 'Business, Industrial & Agriculture', icon: "industry", clicked: false},
            {Id:7, title: 'Services', icon: "concierge-bell", clicked: false},
            {Id:8, title: 'Jobs', icon: "briefcase", clicked: false},
            {Id:9, title: 'Animals', icon: "paw", clicked: false},
            {Id:10, title: 'Furniture & Home Decor', icon: "couch", clicked: false},
            {Id:11, title: 'Fashion & Beauty', icon: "tshirt", clicked: false},
            {Id:12, title: 'Books, Sports & Hobbies', icon: "guitar", clicked: false},
            {Id:13, title: 'Kids', icon: "baby", clicked: false}
        ],
        SubCategory : [
            {Id:0, items:['Tablets', 'Mobile Accessories', 'Mobile Phones']},
            {Id:1, items:['Cars', 'Cars on Installment', 'Car Acessories','Spare Parts','Buses, Vans & Trucks','Rickshaw & Chingchi','Other Vehicles','Boats','Tractors & Trailers']},
            {Id:2, items:['Land & Plots','Houses','Apartments & Flats','Shops - Offices - Commercial Space','Portions & Floors']},
            {Id:3, items:['Houses','Apartments & Flats','Portions & Floors','Shops - Offices - Commercial Space','Rooms','Roommates & Paying Guests','Vacation Rentals - Guest Houses','Lands & Plots']},
            {Id:4, items:['Computers & Accessories','TV - Video - Audio','Cameras & Accessories','Games & Entertainment','Other Home Appliances','Generators, UPS & Power Solutions','Kitchen Appliances','AC & Coolers','Fridges & Freezers', 'Washing Machines & Dryers']},
            {Id:5, items:['Motorcycles','Spare Parts','Bicycles','ATV & Quads','Scooters']},
            {Id:6, items:['Business for Sale','Food & Restaurants','Trade & Industrial','Construction & Heavy Machinery','Agriculture','Other Business & Industry','Medical & Pharma']},
            {Id:7, items:['Education & Classes','Travel & Visa','Car Rental','Drivers & Taxi','Web Development','Other Services','Electronics & Computer Repair','Event Services','Health & Beauty','Maids & Domestic Help','Movers & Packers','Home & Office Repair','Catering & Restaurent','Farm & Fresh Food']},
            {Id:8, items:['Online','Marketing','Advertising & PR','Education','Customer Service','Sales','IT & Networking','Hotels & Tourism','Clerical & Advertisement','Human Resources','Accounting & Finance','Manufacturing','Medical','Domestic Staff','Part - Time','Other Jobs']},
            {Id:9, items:['Fish & Aquariums','Birds','Hens & Aseel','Cats','Dogs','Livestock','Horses','Pet Food & Accessories','Other Animals']},
            {Id:10, items:['Sofa & Chairs','Beds & Wardrobes','Home Decoration','Tables & Dining','Garden & Outdoor','Painting & Mirrors','Rugs & Carpents','Curtains & Blinds','Office Furniture','Other Household Items']},
            {Id:11, items:['Accessories','Clothes','Footwear','Jewellery','Make Up','Skin & Hair','Watches','Wedding','Lawn & Pret','Couture','Other Fashion']},
            {Id:12, items:['Books & Magazines','Musical Instruments','Sport Equipment','Gym & Fitness','Other Hobbies']},
            {Id:13, items:['Kids Furniture','Toys','Prams & Walkers','Swings & Sliders','Kids Bikes','Kids Accessories']}
        ],
        Details : [{Category: 'Mobiles', SubCategory:'Tablets', Div:[{title:'Type',type:'button', options:['Apple','Danny Tabs','Q Tabs','Samsung','Other Tablets']},{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Mobiles', SubCategory:'Mobile Acessories', Div:[{title:'Type', type:'button', options:['Mobiles','Tablets']},{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Mobiles', SubCategory:'Mobile Phones', Div:[{title:'Make', type:'select', options:["","Acer","Alcatel","Appleasus","BlackBerry","Calme","Club","G'Five","Google","Gright","Haier","Honor","HTC","Huawei","iNew","Infinix","Lava","Lenovo","LG","Meizu","Mobilink JazzX","Motorola","Nokia","One Plus","OPPO","Panasonic","QMobile","Realme","RIVO","Samsung","Sony","Sony Ericsson","Tecno","Vivo","VOICE","Xiaomi","Zte","Other Mobiles"]},{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Vehicles', SubCategory:'Cars', Div:[{title:'Make', type:'select', options:["","Audi","BMW","Changan","Chevrolet","Classic & Antiques","Daewoo","Daihatsu","FAW","Honda","Hyundai","Isuzu","JAC","KIA","Land Rover","Lexus","Mazda","Mercedes","Mitsubishi","Nissan","Porsche","Proton","Prince","Range Rover","Renault","Subaru","Suzuki","Toyota","Volkswagen","United","Other Brands"]},{type:'button',title:'Condition', options:['New','Used']},{title:'Year', type:'input'},{title:'KMs driven'}]},
                   {Category: 'Vehicles', SubCategory:'Cars on Installment', Div:[{title:'Make', type:'select', options:["","Audi","BMW","Changan","Chevrolet","Classic & Antiques","Daewoo","Daihatsu","FAW","Honda","Hyundai","Isuzu","JAC","KIA","Land Rover","Lexus","Mazda","Mercedes","Mitsubishi","Nissan","Porsche","Proton","Prince","Range Rover","Renault","Subaru","Suzuki","Toyota","Volkswagen","United","Other Brands"]},{type:'button',title:'Condition', options:['New','Used']},{title:'Year', type:'input'},{title:'Transmission', type:'button', options:['Automatic','Manual']},{title:'Registered', type:'button' ,options:['Yes','No']},{title:'Down Payment (Rs)', type:'input'},{title:'Monthly Installment (Rs)', type:'input'},{title:'Installment Plan', type:'select', options:['','Flexible','1 Year','2 Years','3 Years','4 Years','5 Years','6 Years','7 Year']},{title:'Financer Type', type:'button', options:['Bank','Non Banking Company']},{title:'Transaction Type', type:'button' ,options:['Financing','Leasing']}]},
                   {Category: 'Vehicles', SubCategory:'Cars Accessories',Div:[{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Vehicles', SubCategory:'Spare Parts', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Type', type:'button', options:['Car Parts', 'Other Parts']}]},
                   {Category: 'Vehicles', SubCategory:'Buses, Vans & Trucks', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Year', type:'input'},{title:'KMs driven', type:'input'}]},
                   {Category: 'Vehicles', SubCategory:'Rickshaw & Chingchi', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Year', type:'input'},{title:'KMs driven', type:'input'}]},
                   {Category: 'Vehicles', SubCategory:'Other Vehicles', Div:[{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Vehicles', SubCategory:'Boats', Div:[{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Vehicles', SubCategory:'Tractors & Trailers', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Year', type:'input'},{title:'KMs driven', type:'input'}]},
                   {Category: 'Property For Sale', SubCategory:'Land & Plots', Div:[{title:'Type', type:'button', options:['Agricultural Land','Commercial Plots','Files','Industrial Land','Residential Plots','Plot Form']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}]},
                   {Category: 'Property For Sale', SubCategory:'Houses', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Furnished', type: 'button', options:['No','Yes']}]},
                   {Category: 'Property For Sale', SubCategory:'Apartments & Flats', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Floor Level', type:'select', options:['','1','2','3','4','5','6','7+','Ground']}, {title:'Furnished', type: 'button', options:['No','Yes']}]},
                   {Category: 'Property For Sale', SubCategory:'Shops - Offices - Commercial Space', Div:[{title:'Type', type:'button', options:['Office','Shop','Warehouse','Factory','Building']}, {title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}]},
                   {Category: 'Property For Sale', SubCategory:'Portions & Floors', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Floor Level', type:'select', options:['','1','2','3','4','5','6','7+','Ground']}, {title:'Furnished', type: 'button', options:['No','Yes']}]},
                   {Category: 'Property For Rent', SubCategory:'Houses', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Furnished', type: 'button', options:['No','Yes']}]},
                   {Category: 'Property For Rent', SubCategory:'Apartments & Flats', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Floor Level', type:'select', options:['','1','2','3','4','5','6','7+','Ground']}, {title:'Furnished', type: 'button', options:['No','Yes']}]},
                   {Category: 'Property For Rent', SubCategory:'Portions & Floors', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Floor Level', type:'select', options:['','1','2','3','4','5','6','7+','Ground']}, {title:'Furnished', type: 'button', options:['No','Yes']}]},
                   {Category: 'Property For Rent', SubCategory:'Shops - Offices - Commercial Space', Div:[{title:'Type', type:'button', options:['Office','Shop','Warehouse','Factory','Building']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}, {title:'Floor Level', type:'select', options:['','1','2','3','4','5','6','7+','Ground']}]},
                   {Category: 'Property For Rent', SubCategory:'Rooms'},
                   {Category: 'Property For Rent', SubCategory:'Roommates & Paying Guests', Div:[{title:'Furnished', type:'button', options:['No','Yes']}]},
                   {Category: 'Property For Rent', SubCategory:'Vacation Rentals - Guest Houses', Div:[{title:'Bedrooms', type:'select', options:['','1','2','3','4','5', '6+', 'Studio']}, {title:'Bathrooms', type:'select', options:['','1','2','3','4','5','6','7+']}]},
                   {Category: 'Property For Rent', SubCategory:'Land & Plots', Div:[{title:'Type', type:'button', options:['Agricultural Land','Commercial Plots','Files','Industrial Land','Residential Plots','Plot Form']},{title:'Area unit', type:'button', options:['Kanal','Marla','Square Feet','Square Meter','Square Yards']}, {title: 'Area', type:'input'}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Computers & Accessories', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Type', type:'select', options:['','Computers', 'Hard Disk', 'Internet', 'Laptops', 'Monitors', 'Printers', 'Other Accessories']}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'TV - Video - Audio', Div:[{title:'Type', type:'button', options:['TV', 'Video - Audio']},{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Cameras & Accessories', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Type', type:'button', options:['Cameras', 'Lenses', 'Other Accessories']}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Games & Entertainment'},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Other Home Appliances', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Type', type:'select', options:['','Fans','Iron','Sewing Machines','Vacuum Cleaners','Water Dispensers','Other']}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Generators, UPS & Power Solutions', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Type', type:'button', options:['Batteries','Generators','Solar','UPS','Other']}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Kitchen Appliances', Div:[{title:'Type', type:'select', options:['','Cooking Range','Iron','Sewing Machines','Vacuum Cleaners','Water Dispensers','Other']},{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'AC & Coolers'},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Fridges & Freezers'},
                   {Category: 'Electronics & Home Aplpliances', SubCategory:'Washing Machines & Dryers'},
                   {Category: 'Bikes', SubCategory:'Motorcycles', Div:[{type:'button',title:'Condition', options:['New','Used']},{title:'Make',type:'select', options:['','Crown','Eagle','Ghani','Habib','Harley Davidson','Honda','Kawasaki','Metro','Power','Ravi','Road Prince','Sohrab','Sports & Heavy Bikes','Super Power','Super Star','Suzuki','Unique','United','VESPA','Yamaha','Other Brands']},{title:'Year', type:'input'}]},
                   {Category: 'Bikes', SubCategory:'Spare Parts', Div:[{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Bikes', SubCategory:'Bicycles', Div:[{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Bikes', SubCategory:'ATV & Quads', Div:[{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Bikes', SubCategory:'Scooters', Div:[{title:'Year',type:'input'},{title:'KMs driven', type:'input'},{type:'button',title:'Condition', options:['New','Used']}]},
                   {Category: 'Business, Industrial & Agriculture', SubCategory:'Business for Sale'},
                   {Category: 'Business, Industrial & Agriculture', SubCategory: 'Food & Restaurents', Div:[{title: 'Type', type:'select', options:['','Cooking Equipment','Coolers & Freezers','Crockery & Cutlery','Ovens & Ranges','Tables & Platforms','Other Restaurent Equipment']}]},
                   {Category: 'Business, Industrial & Agriculture', SubCategory: 'Trade & Industrial', Div:[{title: 'Type', type:'button', options:['Electrical & Electronic Equipment','Industrial Equipment','Mechanical Equipment']}]},
                   {Category: 'Business, Industrial & Agriculture', SubCategory: 'Construction & Heavy Machinery', Div:[{title: 'Type', type:'select', options:['','Bulldozers','Construction Material','Cranes','Dumpers','Excavators','Loaders','Rollers','Other Heavy Equipment']}]},
                   {Category: 'Business, Industrial & Agriculture', SubCategory: 'Agriculture', Div:[{title: 'Type', type:'button', options:['Farm Machinery & Equipment','Seeds, Crops, Pesticides & Fertilizers']}]},
                   {Category: 'Business, Industrial & Agriculture', SubCategory: 'Other Business & Industry'},
                   {Category: 'Business, Industrial & Agriculture', SubCategory: 'Medical & Pharma', Div:[{title: 'Type', type:'button', options:['Medical Equipment','Medical Supplies']}]},
                   {Category: 'Services', SubCategory: 'Education & Classes', Div:[{title: 'Type', type:'button', options:['Computer','Language Classes','Music & Dance','Tutoring','Other']}]},
                   {Category: 'Services', SubCategory: 'Travel & Visa'},
                   {Category: 'Services', SubCategory: 'Car Rental'},
                   {Category: 'Services', SubCategory: 'Drivers & Taxi'},
                   {Category: 'Services', SubCategory: 'Web Development'},
                   {Category: 'Services', SubCategory: 'Other Services'},
                   {Category: 'Services', SubCategory: 'Electronics & Computer Repair', Div:[{title: 'Type', type:'button', options:['Computer','Home Appliances','Mobile','Other Electronics']}]},
                   {Category: 'Services', SubCategory: 'Event Services'},
                   {Category: 'Services', SubCategory: 'Health & Beauty'},
                   {Category: 'Services', SubCategory: 'Maids & Domestic Help'},
                   {Category: 'Services', SubCategory: 'Movers & Packers'},
                   {Category: 'Services', SubCategory: 'Home & Office Repair'},
                   {Category: 'Services', SubCategory: 'Catering & Restaurent', Div:[{title: 'Type', type:'button', options:['Catering','Cooked Food','Other']}]},
                   {Category: 'Services', SubCategory: 'Farm & Fresh Food', Div:[{title: 'Type', type:'button', options:['Eggs','Fruits & Veh=getables','Milk','Other']}]},
                   {Category: 'Jobs', SubCategory: 'Online', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Marketing', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Advertising & PR', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Education', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Customer Service', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Sales', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'IT & Networking', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Hotels & Tourism', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Clerical & Administration', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Human Resources', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Accounting & Finance', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Manufacturing', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Medical', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Domestic Staff', Div:[{title:'Type', type:'input', options:['','Baby Sitter','Cook','Driver','Gardener','Maid','Patient Attendant','Security Guard','Other']},{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Part - Time', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Jobs', SubCategory: 'Other Jobs', Div:[{title: 'Ad Type', type:'button', options:['CVs & Resumes','Job offer']},{title:'Position type', type:'button', options:['Contract','Full-time','Part- time','Temporary']}, {title:'Salary period', type:'button', options:['Hourly','Monthly','Weekly','Yearly']},{title:'Salary from',type:'input'},{title:'Salary to',type:'input'}]},
                   {Category: 'Animals', SubCategory: 'Fish & Aquariums'},
                   {Category: 'Animals', SubCategory: 'Birds'},
                   {Category: 'Animals', SubCategory: 'Hens & Aseel'},
                   {Category: 'Animals', SubCategory: 'Cats'},
                   {Category: 'Animals', SubCategory: 'Dogs', Div:[{title: 'Type', type:'select', options:['','Beagle','Boxer','Bulldog','Cocker Spaniel','Dalmatian','Doberman','German Shepherd','Golden Retriever','Labrador','Pomeranian','Pug','Rottweiler','Russian Dogs','Other Breeds']}]},
                   {Category: 'Animals', SubCategory: 'Livestock', Div:[{title: 'Type', type:'select', options:['','Buffaloes','Bulls','Cows','Goats','Sheep','Other Livestock']}]},
                   {Category: 'Animals', SubCategory: 'Horses'},
                   {Category: 'Animals', SubCategory: 'Pet Foods & Accessories'},
                   {Category: 'Animals', SubCategory: 'Other Animals'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Sofa & Chairs'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Beds & Wardrobes'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Home Decoration'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Tables & Dining'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Garden & Outdoor'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Painting & Mirrors'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Rugs & Carpets'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Curtains & Blinds'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Office Furniture'},
                   {Category: 'Furniture & Home Decor', SubCategory: 'Other Household Items'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Accessories', Div:[{title:'Type', type:'button', options:['Accessories for Men','Accessories for Women']}]},
                   {Category: 'Fashion & Beauty', SubCategory: 'Clothes', Div:[{title:'Type', type:'button', options:['Clothes for Men','Clothes for Women']}]},
                   {Category: 'Fashion & Beauty', SubCategory: 'Footwear', Div:[{title:'Type', type:'button', options:['Footwear for Men','Footwear for Women']}]},
                   {Category: 'Fashion & Beauty', SubCategory: 'Jewellery'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Make Up'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Skin & Hair'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Watches', Div:[{title:'Type', type:'button', options:['Watches for Men','Watches for Women']}]},
                   {Category: 'Fashion & Beauty', SubCategory: 'Wedding'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Lawn & Pret'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Couture'},
                   {Category: 'Fashion & Beauty', SubCategory: 'Other Fashion'},
                   {Category: 'Books, Sports & Hobbies', SubCategory: 'Books & Magazines', Div:[{title:'Type', type:'button', options:['Education & Training','Literature & Fiction','Professional','Other Books']}]},
                   {Category: 'Books, Sports & Hobbies', SubCategory: 'Musical Instrument'},
                   {Category: 'Books, Sports & Hobbies', SubCategory: 'Sports Equipment'},
                   {Category: 'Books, Sports & Hobbies', SubCategory: 'Gym & Fitness'},
                   {Category: 'Books, Sports & Hobbies', SubCategory: 'Other Hobbies'},
                   {Category: 'Kids', SubCategory: 'Kids Furniture'},
                   {Category: 'Kids', SubCategory: 'Toys'},
                   {Category: 'Kids', SubCategory: 'Prams & Walkers'},
                   {Category: 'Kids', SubCategory: 'Swings & Slides'},
                   {Category: 'Kids', SubCategory: 'Kids Bikes'},
                   {Category: 'Kids', SubCategory: 'Kids Accessories'}
                   

        ]
    }
    categoryHandler = (main)=>{
        main.clicked = true
        this.state.Clicked = true
        this.state.subItem = this.state.SubCategory[main.Id]
        this.state.SelectedCategory = main.title
        this.setState({
            Clicked: this.state.Clicked,
            subItem: this.state.subItem,
            SelectedCategory: this.state.SelectedCategory
        })
        console.log(this.state.SelectedCategory,main.Id)
    }
    SubCategoryHandler = (sub,Id)=>{
        this.state.SelectedSubCategory = sub
        this.state.Main.style = false
        this.state.Main.classChange = "none"
        console.log(this.state.Details[Id],'Id===>',Id)
        this.state.Details.map(item => {
            
            if(item.SubCategory === this.state.SelectedSubCategory && item.Category === this.state.SelectedCategory){
               console.log(item.Category, item.SubCategory)
                this.state.Div = item.Div
                console.log(item.Div)
                item.Div.map( subItem =>{
                    console.log(subItem)
                    switch (subItem.type) {
                        case 'select':
                            this.state.select.num ++
                            this.state.select.action = true
                            console.log('Select', this.state.select)
                            this.state.SelectedDetails = [...this.state.SelectedDetails, {title: subItem.title, value:"null"}]
                            break;
                        case 'input':
                            this.state.input.num ++
                            this.state.input.action = true
                            console.log('Input', this.state.input)
                            this.state.SelectedDetails = [...this.state.SelectedDetails, {title: subItem.title, value:"null"}]
                            break;
                        case 'button':
                            this.state.button.num ++
                            this.state.button.action = true
                            console.log('bUTTON',this.state.button)
                            this.state.SelectedDetails = [...this.state.SelectedDetails, {title: subItem.title, value:"null"}]
                            break;
                        default:
                            break;
                    }
                    }
                )
            }
        })

        this.setState({
            SelectedSubCategory: this.state.SelectedSubCategory,
            Main: this.state.Main,
            Div: this.state.Div,
            SelectedDetails: this.state.SelectedDetails
        })
        console.log("Selected Div ===>",this.state.Div)
    }
    changeHandler = ()=>{
        this.state.Main.classChange = "block"
        this.state.Main.style = false
        this.setState({
            classChange: this.state.Main.classChange,
            style: this.state.Main.style
        })
        console.log('Class Change',this.state.Main.classChange)
    }
    adHandler = (e,title) =>{
        this.state.SelectedDetails.map( item =>{
            console.log(item)
            switch (item.title) {
                case title:
                    item.value = e.target.value
                    break;
                default:
                    this.setState({
                        state: this.state
                    })
                    break;
            }
            }
        )
    }
    imageHandler = (img,index) =>{
        console.log(img.target.files)
        for(let i = 0; i<12;i++){
            this.state.totalImages[i]--
        }
        console.log(this.state.totalImages, "index=>",index)
        const reader =new FileReader();
        reader.onload = () =>{
          if(reader.readyState===2){
            this.setState({
              images: this.state.images.concat(reader.result),
              totalImages: this.state.totalImages
            })
          }
        }
        reader.readAsDataURL(img.target.files[0])
        console.log(this.state.images)
      }
    render() {
        console.log(this.state)
        return (
            <div className="Sell">
                <div className="header flex align-c">
                    <a role="button" href="/"><i className='fa fa-arrow-left'></i></a>
                    <svg className="logo" width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="fillColor" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                </div>
                <div className="Main-Ad">
                <div className="Ad">
                    <h2 className="s24 b text-center Head">Post Your Ad</h2>
                    <div className="Category">
                        <div className={this.state.Main.style ? "none" : "block"}>
                            <h3 className="m-2 color b s18">Selected Category</h3>
                            <div className="flex breadcrumb s12 mx-3 mb-0">
                                <span>{this.state.SelectedCategory} /  </span>
                                <span>{this.state.SelectedSubCategory}  </span>
                                <span className="b s14 color mx-2 change" role="button" onClick={()=>this.changeHandler()}>Change</span>
                            </div>
                        </div>    
                        <div className={this.state.Main.style ? "block" : this.state.Main.classChange}>
                        <h3 className="mx-2 color b s16">Choose a Category</h3>
                        <div className="flex">
                        <ListGroup className="List flex">
                            
                            {
                                this.state.Category.map(item => {
                                    return(
                                    <ListGroup.Item key={item.Id} action className="color List-item border-left-0" onClick={() => this.categoryHandler(item)}>
                                        <span className=""><i className={'fas fa-'+item.icon}></i></span><span className="List-text">{item.title}</span><i className='fas fa-chevron-right'></i>
                                    </ListGroup.Item>
                                    )
                                })
                            }
                            
                        </ListGroup>
                        <ListGroup className="List">
                            {
                                this.state.Clicked ? this.state.subItem.items.map((item,index) => {
                                    return(
                                        <ListGroup.Item key={index} action className="color List-item border-left-0 border-right-0" onClick={()=>this.SubCategoryHandler(item,index)}>
                                        <span className="List-text">{item}</span>
                                    </ListGroup.Item>
                                    )
                                }): ""
                            }
                        </ListGroup>
                        </div>
                        </div>
                            <hr/>
                        <div className={this.state.Main.style ? "none" : "block"}>
                            <div className="details">
                                <h3 className="px-0 color b s18">Include Some Details</h3>
                                <div className={this.state.Details.action ? "Differ":"none"}></div>
                                {
                                    this.state.Main.style ?  
                                    console.log(this.state.Div):
                                    this.state.Div.map((divItem,index) =>{
                                        return(
                                            <React.Fragment>
                                            {divItem.type === 'select' &&
                                            <div className={this.state.select.action ? "select": "none"}>
                                                <label htmlFor={divItem.title} className="s14 color" key={index}>{divItem.title+""}</label>
                                                <select
                                                    className="form-control"
                                                  id={divItem.title}
                                                  aria-label={divItem.title}
                                                  aria-describedby="select"
                                                  onChange={(e)=>this.adHandler(e,divItem.title)}
                                                >
                                                {
                                                    divItem.options.map((option,index) =>{
                                                        return(
                                                        <option key={index}>{option}</option>
                                                        )
                                                    })
                                                        
                                                }
                                                </select>
                                                <br/>
                                            </div>}
                                        {divItem.type === 'input' &&
                                        
                                        <div className={this.state.input.action ? "Input mb-6 mx-0": "none"}>
                                        <br />
                                        <label htmlFor={divItem.title} className="s14 color" key={index}>{divItem.title+""}</label>
                                        <InputGroup >
                                        <FormControl onChange={(e)=>this.adHandler(e,divItem.title)} id={divItem.title} aria-describedby={divItem.title} />
                                        </InputGroup>
                                        <br />
                                        </div>}
                                        {
                                            divItem.type === 'button' && 
                                        <div>
                                            <br/>
                                            <label htmlFor={divItem.title} className="s14 color" key={index}>{divItem.title+""}</label>
                                            <br/>
                                            {
                                                divItem.options.map((option,index) =>{
                                                    return(
                                                    <Button className="m-1" value={option} onClick={(e)=>this.adHandler(e,divItem.title)} id={divItem.option} variant="outline-secondary" key={index}>{option}</Button>
                                                    )
                                                })
                                                        
                                            }
                                            <br/>
                                        </div>}
                                        
                                        </React.Fragment>
                                        )
                                    })
                                    
                                }
                                <div className="Main-details">
                                  <label htmlFor="ad-title" className="s14 color">Ad title</label>
                                  <InputGroup>
                                    <FormControl onChange={(e)=>this.adHandler(e,'Ad Title')} id="ad-title" aria-describedby="ad-title" />
                                  </InputGroup>
                                  <div className="description mb-3">
                                    <span className="s12">Mention the key features of your item (e.g. brand, model, age, type)</span>
                                    <span className="s12">0 / 70</span>
                                  </div>
                                  <label htmlFor="ad-des" className="s14 color">Description</label>
                                  <InputGroup>
                                    <FormControl onChange={(e)=>this.adHandler(e,'Description')}  id="ad-des" as="textarea" aria-label="With textarea" />
                                  </InputGroup>
                                  <div className="description">
                                    <span className="s12">Mention the key features of your item (e.g. brand, model, age, type)</span>
                                    <span className="s12">0 / 70</span>
                                  </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="details">
                                <h3 className="px-0 color b s18">Set a Price</h3>
                                <div>
                                  <label htmlFor="basic-url" className="s14 color">Price</label>
                                  <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id="basic-addon1">Rs</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                      onChange={(e)=>this.adHandler(e,'Price')}
                                      aria-describedby="basic-addon1"
                                    />
                                  </InputGroup>
                                </div>             
                            </div>
                            <hr/>
                            <div className="details">
                                <h3 className="px-0 color b s18">Upload up to 12 Photos</h3>
                                <div className="block">
                                    {this.state.totalImages.map((object, i) =>{
                                        let click = 0
                                        let cls
                                        if(this.state.totalImages[i] === 0 || this.state.totalImages[i] < 0){
                                            cls = 'active'
                                            click++
                                        } else{
                                            cls = 'disabled'
                                        }
                                        
                                        console.log("class==>",cls,"index==>",i)
                                    return(<div className={"Upload "+cls} key={i}> 
                                      <div className="Upload-box ">
                                    {
                                      this.state.images[i] ? <img src={this.state.images[i]} alt=""  key={i}/>:<button type="button" className="button" tabIndex="0" data-aut-id="" title="" key={i}><label htmlFor={"upload"+cls}  key={i}><i className={"fas fa-camera "+cls}></i><span className="s15">Add Photo</span></label></button>}</div>
                                    <input required='required' id="uploadactive" onChange={(e)=>this.imageHandler(e,click)} multiple accept="image/*" type="file"  style={{display: "none"}} /></div>)})}
                                    <p className="required">The field is mandatory</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="details">
                                <h3 className="px-0 color b s18">Confirm your location</h3>
                                <div className="location">
                                    <ul className="flex m-0 p-0 no-ul justify-c">
                                        <li className="text-center no-ul li active" ><button className="li-btn" role="button">List</button></li>
                                        <li className="text-center no-ul li" ><button className="li-btn" role="button">Current Location</button></li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className="details">
                                <h3 className="px-0 color b s18">Review your details</h3>
                                <div className="rui-DPozC rui-290mv rui-HWDph rui-2y_QN">
                                <div className="_35tqs">
                                <div className="_2P9Mt">
                                <div data-aut-id="avatarWrapper">
                                <figure className="figure"><img src={this.state.profile} alt="profile" /></figure></div>
                                <label htmlFor="profile">Change</label>
                                <input accept="image/jpg,image/jpeg,image/png" id="profile" style={{display: "none"}} onChange={(e)=>this.setState({profile: e.target.src})} type="file" /></div></div>
                                <a className="AQ">
                                <div className="rui-2zbKc">
                                <label htmlFor="name">Name</label>
                                <div className="input-box"><div className="flex align-c"><div className="grow-1"><input id="name" name="name" type="text" autoComplete="off" className="input" maxLength="30" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} />
                                <div className="rui-1ckrC"></div></div></div></div><div className="rui-1g6wu"><span className="rui-qvKkT"></span><span className="rui-1qqJ6">4 / 30</span></div></div></a></div>
                            </div>
                            <hr/>
                            <div className="details">
                                <Button variant="outline-secondary" className={this.state.SelectedDetails.length ? "": "disabled"} onClick={this.props.set_ad(this.state.SelectedCategory,this.state.SelectedSubCategory,this.state.SelectedDetails,this.state.images,)}>Post Now<Link to={Home}  /></Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ads: state.app.ads,
    current_user: state.auth.current_user,
    name: "GHOUS AHMED"
})

const mapDispatchToProps = (dispatch) => ({
    set_ad: (Category,SubCategory,Details,Images) => dispatch(set_ad(Category,SubCategory,Details,Images)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
    )(Sell);