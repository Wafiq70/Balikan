package uas.pkg12;
import java.util.ArrayList;
import java.util.Scanner;

public class Uas12 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ArrayList<String> dataMahasiswa = new ArrayList<>();  // ArrayList untuk menyimpan data mahasiswa [nama, nim]
        char im;

        do {
            
            System.out.print("Input mahasiswa (y/n): ");
            im = input.nextLine().charAt(0);

            if (im == 'y' || im == 'Y') {
                System.out.println("======================");
                System.out.println("--Input Data Mahasiswa--");
                System.out.println("======================");

                System.out.print("Nama: ");
                String nama = input.nextLine();

                System.out.print("NIM: ");
                String nim = input.nextLine();
                
                // Menyimpan data mahasiswa ke dalam ArrayList
                dataMahasiswa.add("Nama: " + nama + "\nNIM: " + nim);
                
            }

        } while (im == 'y' || im == 'Y');

        System.out.println("======================");
        System.out.println("\t--Hasil--");
        System.out.println("======================");

        // Menampilkan semua data mahasiswa dari ArrayList
        for (String data : dataMahasiswa) {
            System.out.println(data);
        }

        System.out.println("Terima kasih!");
        input.close();
    }
}
