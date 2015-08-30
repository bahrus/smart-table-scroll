/**
 * Created by Bruce on 8/29/2015.
 */
//
//
// Demo of SmartTableScroll
///<reference path='Scripts/typings/lodash/lodash.d.ts'/>
//declare var SmartTableScroll;
var noOfCols = 2;
var table = window['table'] = new ScrollableTable({
    //
    el: document.querySelector('#table-target'),
    //
    data: _.range(1e6).map(function (ndx) {
        var returnObj = {
            index: ndx,
            color: _.sample(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']),
            random: Math.ceil(Math.random() * 100),
        };
        _.range(noOfCols).forEach(function (colIdx) {
            returnObj['col' + colIdx] = 'row ' + ndx + ', col ' + colIdx;
        });
        return returnObj;
    }),
    //
    heightFn: function () { return 20; },
    availableNodes: 200,
    //
    buildRow: function (rowData) {
        var node = document.createElement('div');
        node.classList.add('test-row');
        var inner = "<div class='test-col index'>" + rowData.index + "</div>" +
            "<div class='test-col color'>" + rowData.color + "</div>" +
            "<div class='test-col random'>" + rowData.random + "</div>";
        _.range(noOfCols).forEach(function (colIdx) {
            inner += "<div class='test-col dyn'>" + rowData['col' + colIdx] + "</div>";
        });
        node.innerHTML = inner;
        node.childNodes[1]['style'].color = rowData.color;
        return node;
    },
    //
    updateRow: function (rowData, rowEl) {
        rowEl.childNodes[0].textContent = rowData.index;
        rowEl.childNodes[1].textContent = rowData.color;
        rowEl.childNodes[1].style.color = rowData.color;
        rowEl.childNodes[2].textContent = rowData.random;
        _.range(noOfCols).forEach(function (colIdx) {
            rowEl.childNodes[2 + colIdx].textContent = rowData['col' + colIdx];
        });
    }
});
//# sourceMappingURL=app.js.map