import csv
import re 

tsv_file = open("ENG Lev7 Interesting Sentences - Lists.tsv")
read_tsv = csv.reader(tsv_file, delimiter="\t")

ext_caus = ['churns out', 'conducts', 'conflates', 'disengages from', 'distills', 'equates to', 'equates', 'precipitates', 'rescinds', 'rustles up', 'subdivides into', 'subdivides', 'substitutes', 'substitutes for', 'substitutes', 'sustains', 'transmutes into', 'conceives', 'concocts', 'issues']
act = ['bales out', 'bales', 'barges past', 'barges', 'blasts away', 'blasts off', 'blasts', 'bolts down', 'bolts', 'boogies', 'browses', 'bucks', 'butts in', 'butts out', 'cambers', 'coasts along', 'coasts', 'comes out of the woodwork', 'commutes', 'darts', 'decomposes', 'flops', 'funnels', 'gallops', 'hovers around', 'hovers', 'jerks', 'keels', 'hunkers', 'lashes', 'lumbers', 'lurks', 'makes a foray into', 'makes forays into', 'hunkers down', 'looms up', 'nips', 'nudges', 'outruns', 'overflies', 'paddles', 'perches', 'plods', 'plods along', 'plods on', 'plunges', 'plunges into water', 'preys', 'punts', 'putters', 'rattles around', 'rebounds', 'reels', 'roams', 'roves', 'rumbles', 'scampers', 'scarpers', 'scrolls', 'shimmies', 'shudders', 'sidesteps', 'slams', 'slaps', 'slugs', 'slumps', 'smashes', 'smashes down', 'smashes into', 'smashes through', 'smashes up', 'smashes', 'smirks', 'snarls', 'snatches at', 'snatches', 'snuggles', 'sows the seeds of', 'sows wild oats', 'sows', 'sprints', 'spurts out', 'spurts', 'squats down', 'squats on', 'squats', 'staggers', 'stampedes', 'startles', 'stomps', 'stoops down', 'stoops over', 'stoops', 'strides', 'strolls', 'struts', 'stumps', 'thrusts', 'tilts at', 'tiptoes', 'traipses', 'transgresses against', 'transgresses', 'trots out', 'trots', 'twirls', 'ventures to', 'waddles up', 'waddles', 'wades in', 'wades into', 'wades through', 'wades', 'wails about', 'wails for', 'walks down the aisle', 'waterskis', 'wiggles', 'zips', 'zooms', 'churns', 'drops anchor', 'evaporates', 'volleys', 'blazes away', 'blazes with', 'blazes a trail', 'inquires how', 'goes adrift', 'goes astray', 'goes overboard', 'zooms off', 'moors', 'moves downwards', 'navigates', 'nosedives', 'plunges in', 'plunges', 'revolves', 'roams', 'scrambles for', 'shimmies', 'sidesteps', 'skyrockets', 'slews', 'strays', 'strays from', 'struts', 'swirls', 'tramps', 'waddles up to', 'waddles', 'zooms','jerks', 'pokes', 'slews', 'spurts out', 'spurts', 'stamps', 'whirls']
actcaus = ['hauls', 'catapults +THM;', 'churns up +THM;', 'churns +THM;', 'clings to +THM;', 'clings onto +THM;', 'ejects +THM;', 'evaporates +THM;', 'hauls up +THM;', 'hauls +THM;', 'hounds out +THM;', 'lathers +THM; +LOC;', 'lobs +THM;', 'lodges +THM; +LOC;', 'nudges +THM; +LOC;', 'nudges +THM;', 'plows into +THM;', 'props +THM; +LOC;', 'roves +THM; +LOC;', 'slaps +THM; +LOC;', 'smashes through +THM;', 'smashes up +THM;', 'steers +THM;', 'thrusts +THM; +LOC;', 'tilts +THM; +LOC;', 'volleys +THM; +LOC;', 'funnels +THM; +LOC;', 'lashes +THM; +LOC;', 'lathers +THM; +LOC;', 'lobs +THM; +LOC;', 'wedges +THM; +LOC;', 'moors +THM;', 'plunges by +THM;', 'plunges from +THM;', 'clings to +PAT;', 'clings onto +PAT;', 'gallops +PAT; +LOC;', 'nudges +PAT; +LOC;', 'nudges +PAT;', 'scampers +PAT; +LOC;', 'leads astray', 'navigates through +THM;', 'lashes into +LOC;', 'lashes +LOC;', 'mops up +LOC;', 'nips at +LOC;', 'slams into +LOC;', 'moors +THM; +LOC;', 'shoves +PAT;', 'shoves +THM;', 'shoves +PAT; +LOC;', 'shoves +THM; +LOC;']
ext = set()
act_caus =set()


for row in read_tsv:
    if row[28] not in ext:
        row[28] = row[28].split(" +")[0]
        ext.add(row[28][1:])
    
for ac in actcaus:
    ac = ac.split(" +")[0]
    act_caus.add(ac)

ext = ext[1:-1]

print(len(ext_caus))
print(ext_caus)

tsv_file.close()

