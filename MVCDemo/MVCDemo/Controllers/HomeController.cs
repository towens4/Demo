using Microsoft.AspNetCore.Mvc;
using MVCDemo.Model;

namespace MVCDemo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
             
            return View(new Movie() { Name = "Whale", Genre = "Action"});
        }
    }
}
