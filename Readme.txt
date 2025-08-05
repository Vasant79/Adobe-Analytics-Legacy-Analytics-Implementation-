Hi Jaya,

Greetings of the day!

I’m Vasant from the Adobe Analytics team, and it’s a pleasure to be working with you on this ticket, which is currently assigned a P3 priority.


As per my understanding, you want to know the following:



Where you can manage Data Warehouse request locations.

Who can delete existing locations.



Addressing your query:

Managing Data Warehouse Locations

You can manage your Data Warehouse location settings in Components → Locations.


When you access Locations, there are two key aspects:

Location Account

If you are setting up a location for the first time, you need to configure a Location Account. It requires specific details based on the type of location you are setting up.
For example, if you are setting up an FTP location, you need to provide:

The Location Account details need to be set up only once for a specific location.
         Hostname, Port, Username, Location account secret.


Location Setup
Specify what the location will be used for (e.g., Data Warehouse).
Link it to the Location Account you created earlier.
Optionally, define a directory where Adobe should deliver the Data Warehouse reports.

Once the Location Account is created, the next step is configuring the Location itself.

Who Can Delete an Existing Location?
A user must be added to a Product Profile with access to at least one Report Suite and Web Services access to create a Location and Location Account.

Permissions Required:

However, there is a workaround that might allow a non-admin user to delete a location:
Select the checkbox for all locations.
Click the Delete option at the bottom.
Confirm deletion.

Ideally, only admins can delete a Location or Location Account

I trust this information addresses your query. Let me know if you need further clarification.


Thank you.

Best regards,
Vasant Singh Negi | Technical Product Consultant | Adobe Analytics | Working hours:  Mon. – Fri: 2:00 PM to 11:00 PM IST| vasants@adobe.com