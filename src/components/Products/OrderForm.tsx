import { Product } from "@/types/product";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface OrderFormProps {
  product: Product;
  material: string;
  color: string;
  size: string;
  totalPrices: number;
}

export default function OrderForm({
  product,
  material,
  color,
  size,
  totalPrices,
}: OrderFormProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [quantity, setQuantity] = useState(1); // State untuk jumlah pesanan
  const [totalPrice, setTotalPrice] = useState(totalPrices); // State untuk harga total

  // Fungsi untuk mengupdate jumlah dan menghitung total harga
  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
    setTotalPrice(totalPrices * value);
  };

  useEffect(() => {
    setTotalPrice(totalPrices);
  }, [totalPrices]);

  const input = [
    {
      label: "Nama",
      placeholder: "Masukkan Nama Anda",
    },
    {
      label: "Alamat",
      placeholder: "Masukkan Alamat Anda",
    },
    {
      label: "Nomor Telepon",
      placeholder: "Masukkan Nomor Telepon Anda",
    },
  ];

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Beli Sekarang
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                Form Pemesanan
              </ModalHeader>
              <ModalBody>
                {input.map((item, index) => (
                  <Input
                    key={index}
                    label={item.label}
                    placeholder={item.placeholder}
                    variant="bordered"
                    size="sm"
                  />
                ))}
                {/* Input jumlah pesanan */}
                <Input
                  type="number"
                  min={1}
                  size="sm"
                  value={quantity.toString()}
                  onChange={(e) =>
                    handleQuantityChange(parseInt(e.target.value, 10))
                  }
                  label="Jumlah Produk"
                  placeholder="Masukkan Jumlah Produk"
                  variant="bordered"
                />

                {/* Keterangan Pesanan */}
                <h3 className="text-lg font-semibold">Keterangan Pesanan:</h3>
                <ul className="list-disc flex flex-row gap-9 pl-5 items-center space-y-1">
                  <div>
                    <li>
                      <span className="font-semibold">Produk:</span>{" "}
                      {product.name}
                    </li>
                    <li>
                      <span className="font-semibold">Bahan:</span> {material}
                    </li>
                  </div>
                  <div>
                    <li>
                      <span className="font-semibold">Warna:</span> {color}
                    </li>
                    <li>
                      <span className="font-semibold">Ukuran:</span> {size}
                    </li>
                  </div>
                </ul>

                {/* Harga Total */}
                <h3 className="text-lg font-semibold">
                  Harga Total: Rp{" "}
                  {totalPrice ? totalPrice.toLocaleString("id-ID") : 0}
                </h3>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Batal
                </Button>
                <Button color="primary" onPress={onClose}>
                  Pesan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
