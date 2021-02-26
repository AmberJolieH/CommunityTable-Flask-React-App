import React from "react";
import { ReactComponent as nonPerish } from "../../images/cans.svg";
import { ReactComponent as perish } from "../../images/parishable.svg";
import { ReactComponent as water } from "../../images/WATER.svg";
import { ReactComponent as baby } from "../../images/diapers.svg";
import { ReactComponent as childCare } from "../../images/CHILDS-toys.svg";
import { ReactComponent as cloth } from "../../images/cloth.svg";
import { ReactComponent as elec } from "../../images/elec.svg";
import { ReactComponent as book } from "../../images/books.svg";
import { ReactComponent as school } from "../../images/schoolSupplies.svg";
import { ReactComponent as furn } from "../../images/furn.svg";
import { ReactComponent as shelt } from "../../images/shelter.svg";
import { ReactComponent as service } from "../../images/services.svg";
import { ReactComponent as other } from "../../images/etc.svg";


const componentMap = {
    'Non-Perishable Food': nonPerish,
    'Perishable Food': perish,
    'Water and beverages': water,
    'Baby care': baby,
    'Children toys': childCare,
    'Clothing': cloth,
    'Electronics': elec,
    'Books': book,
    'School Supplies': school,
    'Furniture': furn,
    'Shelter': shelt,
    'Services (Barber, shower, etc)': service,
    'Other': other,
};

const ResourceImage = ({ name, ...rest }) => {
    const Component = componentMap[name] || perish;
    return <Component alt={name} {...rest} />;
};

export default ResourceImage;
