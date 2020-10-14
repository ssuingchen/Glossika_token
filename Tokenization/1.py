import data_lev7

text= ""
file_name = "permute_level7_finstatcaus_benrec.txt"

for finstat_caus in data_lev7.finstat_caus:
    for benrec in data_lev7.benrec:
        text +='the '+finstat_caus+' '+benrec+', '+'&FINSTAT;&CAUS;&BENREC;'+'\n'
        print('the '+finstat_caus+' '+benrec+', '+'&FINSTAT;&CAUS;&BENREC;')
with open(file_name, "w") as f1:
    f1.write(text)

