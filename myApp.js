'use strict';

function change(evt, button) {
    var i, cont, tab;

    cont = document['getElementsByClassName']("cont");
    for (i = 0; i < cont.length; i++) {
        cont[i]['style']['display'] = "none";
    }
    tab = document['getElementsByClassName']("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i]['className'] = tab[i]['className']['replace'](" active", "");
    }
    document['getElementById'](button)['style']['display'] = "block";
    evt['currentTarget']['className'] += " active";
};
