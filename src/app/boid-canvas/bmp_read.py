import os
from imageio import imread

path = 'swarms.bmp'
img = imread(path, pilmode='F')
f = open('title-nodes.ts', 'w')
node_count = 0

f.write('import { Node } from \'./node\'\n\n')
f.write('export const NODE_SCALE_X: number = ' + str(len(img[0])) + ';\n\n')
f.write('export const NODE_SCALE_Y: number = ' + str(len(img)) + ';\n\n')
f.write('export const NODES: Node[] = [\n')

# decide if 'on' pixels are black or white
if img[0][0] == 0:
    ON = 255
else:
    ON = 0

for r in range(len(img)):
    outstr = ''
    for c in range(len(img[0])):
        if img[r][c] == ON:
            f.write('    { x: ' + str(c) + ', y: ' + str(r) + ' },\n')
            outstr = outstr + '#'
            node_count += 1
        else:
            outstr = outstr + ' '
    print(outstr)

f.write('];\n')
print(node_count)