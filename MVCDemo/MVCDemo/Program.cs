using Autofac;
using Autofac.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

var app = builder.Build();




app.UseRouting();
app.UseStaticFiles();
app.MapControllerRoute("default", "{controller=Home}/{action=Index}");




/*app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}");
});*/

app.Run();
