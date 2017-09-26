module.exports = class AbstractDataMunging  {
    
    construct() {
        var data;
        var dataFile;
    }

    loadDataFile(fileName){
        dataFile = fileName;
        data = file_get_contents(dataFile);    
        return Boolean(data.lenght);
    };

    loadDataFileToArrayOfLines() {
        file = fopen(dataFile, "r");
        lines = array();
        while (!feof(file)) {
            lines = fgets(file);
        }
        fclose(file);
        return lines;
    };
};
   
