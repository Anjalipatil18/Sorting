a=[4,-1,0,4,2,-9]
for i in range(0,len(a)):
    for j in range(i+1,len(a)):
        if a[i]>a[j]:
            swap=a[i]
            a[i]=a[j]
            a[j]=swap
        j=j+1
    i=i+1
print a

a=[4,-1,0,4,2,-9]
i=0
while i<len(a):
    j=i+1
    while j<len(a):
        if a[i]>a[j]:
            swap=a[i]
            a[i]=a[j]
            a[j]=swap
        j=j+1
    i=i+1
print a