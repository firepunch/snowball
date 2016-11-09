"use strict";

var towerMapArr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 1983, 1984, 1985, 372, 373, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3511, 3506, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1983, 1984, 1985, 1986, 372, 373, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3511, 3506, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1983, 1984, 1985, 372, 373, 374, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 1987, 1988, 1989, 376, 377, 378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3561, 3562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 1989, 1990, 376, 377, 378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3527, 3528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 1989, 376, 377, 378, 0, 0, 0, 0],
  [3578, 3579, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1983, 1984, 1985, 1986, 371, 372, 3565, 3566, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3531, 3532, 1985, 1986, 371, 372, 373, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3612, 3613],
  [3584, 3585, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1983, 1984, 374, 0, 0, 0, 0, 0, 0, 0, 0, 1983, 1984, 374, 0, 0, 0, 1987, 1988, 1989, 1990, 375, 376, 3569, 3570, 0, 0, 0, 1983, 1984, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1983, 1984, 374, 0, 0, 0, 3535, 3536, 1989, 1990, 375, 376, 377, 378, 0, 0, 0, 1983, 1984, 374, 0, 0, 0, 0, 0, 0, 1983, 1984, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3618, 3619],
  [3590, 3591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 378, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1987, 1988, 378, 0, 0, 0, 0, 0, 0, 1987, 1988, 378, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3624, 3625],
  [3596, 3597, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 208, 209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3630, 3631],
  [3602, 3603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 211, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3636, 3637],
  [3608, 3609, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 214, 215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3642, 3643],
  [423, 424, 425, 440, 441, 442, 0, 0, 407, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 442, 0, 0, 407, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 441, 442, 0, 0, 407, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 426, 423, 424, 425, 442, 0, 0, 407, 408, 409, 410, 425, 426],
  [427, 428, 429, 444, 445, 446, 0, 0, 411, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 446, 0, 0, 411, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 445, 446, 0, 0, 411, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 430, 427, 428, 429, 446, 0, 0, 411, 412, 413, 414, 429, 430],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222, 223, 224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 216, 217, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 226, 227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 216, 217, 218, 0, 0],
  [0, 0, 219, 220, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 228, 229, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 220, 221, 0, 0],
  [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 18, 19, 20, 21, 22, 23, 24, 25, 26],
  [ 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 34, 35, 36, 37, 38, 39, 40, 41, 42],
  [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 50, 51, 52, 53, 54, 55, 56, 57, 58]
];

module.exports = towerMapArr;