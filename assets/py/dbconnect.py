# importing the mysql module 
import mysql.connector

# connecting my database 
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="test1"
)

# 
mycursor = mydb.cursor()

# mycursor.execute("all mysql commands work in here")
# mycursor.execute("CREATE TABLE Teachers (name VARCHAR(255) not null, subject VARCHAR(255) not null, address VARCHAR(255) not null, passcode VARCHAR(255) not null)")

#showing databases 
# mycursor.execute()

sql = "insert into Teachers (name, subject, address, passcode) values (%s, %s, %s, %s)"

val = ("edris", "eng", "mkn","pppppp")

mycursor.execute(sql, val)

mydb.commit()


