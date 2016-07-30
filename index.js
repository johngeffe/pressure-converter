var factors = {
    "atmosphere (atm)": 0.98692326671601,
    "atm": 0.98692326671601,
    "bar (b)": 1,
    "b": 1,
    "hectopascal (hPa)": 1000,
    "hPa": 1000,
    "kilogram per sq. cm (kgf/cm²)": 1.0197162129779,
    "kgf/cm²": 1.0197162129779,
    "kilogram per sq. meter (kgf/m²)": 10197.162129779,
    "kgf/m²": 10197.162129779,
    "kilopascal (kPa)": 100,
    "kPa": 100,
    "millibar": 1000,
    "mBar": 1000,
    "millimeter of mercury (mmHg)": 750.06168270417,
    "mmHg": 750.06168270417,
    "pascal (Pa)": 100000,
    "Pa": 100000,
    "pounds per square foot (psf)": 2088.5456325465,
    "psf": 2088.5456325465,
    "pounds per square inch (psi)": 14.503789114906,
    "psi": 14.503789114906,
    "torr": 750.06168270417
};

function fix(v) {
    if (!isFinite(v))
        return "";
    if (v == 0)
        return "0";
    st = "" + v;
    epos = st.indexOf('E');
    if (epos == -1)
        epos = st.indexOf('e');
    sdigi = Math.log(Math.abs(v)) / Math.LN10;
    sdigif = Math.floor(sdigi);
    if (epos == -1) {
        adjust = Math.pow(10, sdigif - 12);
        faqs = Math.round(v / adjust);
        norst = "" + faqs;
        if (sdigif < 12) {
            adjust2 = Math.pow(10, 12 - sdigif);
            return (faqs / adjust2);
        } else
            return (faqs * adjust);
    } else {
        zo = v * Math.pow(10, 12 - sdigif);
        szo = String(Math.round(zo));
        inse = -1;
        if (szo.charAt(0) == '-')
            inse = 2;
        else
            inse = 1;
        rest = szo.substring(inse, szo.length);
        i = rest.length - 1;
        while (i >= 0 && rest.charAt(i) == '0')
            i--;
        rest = rest.substring(0, i + 1);
        rou = szo.substring(0, inse);
        if (rest.length > 0)
            rou += "." + rest;
        if (sdigif < 0)
            sa = rou + "E";
        else
            sa = rou + "E+";
        snow = sa + sdigif;
        vanow = Math.abs(parseFloat(snow));
        faqsvab = Math.abs(v);
        if (sdigif >= 0) {
            if (vanow > 5 * faqsvab)
                snow = sa + String(sdigif - 1);
            else if (vanow < faqsvab / 5)
                snow = sa + String(sdigif + 1);
        } else if (sdigif >= 0) {
            if (vanow > 5 * faqsvab)
                snow = sa + String(sdigif + 1);
            else if (vanow < faqsvab / 5)
                snow = sa + String(sdigif - 1);
        }
        vanow = parseFloat(snow);
        if (vanow > 1.1 * v || vanow < 0.9 * v)
            return v;
        else
            return snow;
    }
}

module.exports.convertPressure = function(options) {
    w1 = options.fromUnits;
    w2 = options.toUnits;
    val = options.value;
    faqsorg = factors[w1] / factors[w2];
    resfaqs = val * faqsorg;
    if (isNaN(parseFloat(resfaqs))) {
        return ''
    } else {
        return fix(parseFloat(resfaqs)) + ' ';
    }
};