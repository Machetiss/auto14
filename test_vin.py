import sys
sys.path.append(r"C:\Users\lenovo\Pictures\Авто14\Maslo Oil")
from vin_decoder import decode_vin

vin = "Z94K241CBNR413757"
res = decode_vin(vin)
print("Decoded:", res)
