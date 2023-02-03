#!/bin/sh

# 1. Menampilkan ukuran memory pada sistem dalam satuan megabyte
system_in_mega=$(du -hm)
#echo ${system_in_mega}

# 2. Menampilkan ruang disk pada fs dalam satuan gigabytes
fs_in_gb=$(df -h  --block-size=G)
#echo ${fs_in_gb}

#3. Memampilkan penggunaan ruang disk pada fd dan use% 
fs_with_use=$(df -h | grep -v 'tmpfs' | awk '{print $1 " " $5}') 
#echo ${fs_with_use}

# Looping agar file tetap dapat berjalan
while true 
do 
  echo ${system_in_mega}
  sleep 3 # jeda 3 detik setelah command pertama dijalankan 
  echo ${fs_in_gb}
  sleep 3 # jeda 3 detik setelah command kedua dijalankan
  echo ${fs_with_use}
  sleep 1m # jeda 1 menit (60s) setelah command ketiga dijalankan, kemudian diulangi dengan command pertama kembali
done

